import {
  Box,
  Button,
  Center,
  Text,
  Link,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
} from '@chakra-ui/react';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Emoji } from '~/components/shared/Emoji';
import { SurveyQuestionStepper } from '~/components/backtalk/survey/SurveyQuestionStepper';
import { backtalkNewResponseContext } from '~/components/context/BacktalkNewResponse';
import { EthersContext } from 'common/components/context/EthersContext';
import { ethers } from 'ethers';
import { getCommonABI } from '~/utils/getCommonABI';
import { ERC721 } from 'types';
import Login from 'common/components/access/Login';
import { Supported_Chains_Enum } from '~/schema/generated';
import { Image } from '~/components/shared/Image';
import BacktalkLogo from 'src/assets/images/backtalk-icon.svg';
import { useAccount, useConnect, useProvider } from 'wagmi';
import { css, Global } from '@emotion/react';

export const SurveyResponse: FC = () => {
  const {
    surveyFetchState: { loading },
    surveyResponseData: data,
    surveyResponseDispatch,
  } = useContext(backtalkNewResponseContext);
  const { isLoggedIn } = useContext(EthersContext);

  const ethProvider = useProvider({ chainId: 1 });
  const polyProvider = useProvider({ chainId: 137 });

  const { data: account } = useAccount();

  const signerAddr = account?.address;

  useEffect(() => {
    if (
      data?.callerResponses.length > 0 &&
      data.step !== data.questions.length + 1
    ) {
      surveyResponseDispatch({
        type: 'endSurvey',
      });
    }
  }, [data, surveyResponseDispatch]);
  const surveyEnd = data.step === data?.questions?.length + 1;

  const [balData, setBalData] = useState({ loading: false, error: false });

  useEffect(() => {
    const getBal = async () => {
      setBalData((bd) => ({ ...bd, loading: true }));
      for (const contract of data.contracts ?? []) {
        if (
          contract?.address &&
          contract.token_type &&
          ethProvider &&
          polyProvider &&
          signerAddr &&
          isLoggedIn
        ) {
          try {
            const token = new ethers.Contract(
              contract.address,
              getCommonABI(contract.token_type),
              (contract.chain === Supported_Chains_Enum.Ethereum
                ? ethProvider
                : polyProvider) as unknown as ethers.providers.Provider,
            ) as ERC721;
            const bal = await token.balanceOf(signerAddr);
            setBalData((bd) => ({ ...bd, error: bal.lt(1) }));
          } catch (err) {
            console.error(err);
          }
        }
      }
      setBalData((bd) => ({ ...bd, loading: false }));
    };

    getBal();
  }, [data.contracts, ethProvider, isLoggedIn, polyProvider, signerAddr]);

  if (loading && data.id === -1) {
    return <Center h='100%'>Loading</Center>;
  }

  if (balData.loading) {
    return <Center h='100%'>Checking Token Balance...</Center>;
  }

  if (!!signerAddr && data.id === -1) {
    return <Center>Survey Not Found</Center>;
  }

  if (balData.error) {
    return <Center>You don&apos;t hold enough tokens!</Center>;
  }

  if (
    (data && !data?.is_active) ||
    (typeof data.response_count === 'number' &&
      typeof data.max_responses === 'number' &&
      data?.response_count >= data?.max_responses)
  ) {
    return (
      <VStack>
        <Image src={BacktalkLogo} alt='BacktalkLogo' height={38} width={52} />
        <Text as='h1' mb={2} fontSize='xl' fontWeight='700'>
          Uh oh! You&apos;re NGMI
        </Text>
        <Text textAlign='center' fontSize='lg' pb={4}>
          {data.is_active
            ? 'This survey already has the maximum number&nbsp;of&nbsp;responses.'
            : 'This survey is closed.'}
        </Text>
        <Text textAlign='center' fontSize='lg'>
          Want to make a web3 survey of your own?
        </Text>
        <Link href='/'>
          <Button
            colorScheme='gray'
            mt={4}
            size='md'
            variant='outline'
            _hover={{
              backgroundColor: 'gray.200',
              color: 'black',
            }}>
            Make one now
          </Button>
        </Link>
      </VStack>
    );
  }

  if (surveyEnd) {
    return (
      <>
        <Text as='h1' mb={2} fontSize='xl' fontWeight='700'>
          Woo-hoo! <Emoji aria-label='Party'>🎉</Emoji>
        </Text>
        <Text mb={2}>Thanks so much for your feedback for {data.title}.</Text>
        <Text>Want to make a web3 survey of your own?</Text>
        <Link href='/'>
          <Button
            colorScheme='gray'
            mt={4}
            size='md'
            variant='outline'
            _hover={{
              backgroundColor: 'gray.200',
              color: 'black',
            }}>
            Make one now
          </Button>
        </Link>
      </>
    );
  }
  console.log(data?.survey_image?.url);
  return (
    <Box mt={!!data?.survey_image?.url ? 16 : 0} position='relative'>
      {!!data?.survey_image?.url && (
        <Box
          bg='purple.800'
          w={140}
          h={140}
          p={2}
          position='absolute'
          overflow='hidden'
          rounded='full'
          left='50%'
          top='-140px'
          transform='translateX(-50%)'>
          <Box
            rounded='full'
            overflow='hidden'
            width={120}
            height={120}
            mx='auto'
            mt='1%'
            position='relative'>
            <Image
              src={data?.survey_image?.url ?? ''}
              layout='fill'
              alt='Survey Logo'
            />
          </Box>
        </Box>
      )}
      <Text as='h1' mb={2} fontSize='xl' fontWeight='700'>
        {data.title}
      </Text>
      {data.step < 0 ? (
        <Box>
          <HStack
            as='span'
            maxW='100%'
            fontSize='xs'
            fontWeight='bold'
            color='purple.200'
            mb={4}
            alignItems='flex-start'
            isTruncated
            css={css`
              button.test span {
                overflow: hidden;
                text-overflow: ellipsis;
              }
            `}>
            <Text>Created by</Text>
            <Menu>
              <MenuButton
                className='test'
                marginInline='0.5ch !important'
                isTruncated>
                {data.owner}
              </MenuButton>
              <MenuList>
                {['etherscan.io', 'polygonscan.com'].map((scan) => (
                  <MenuItem key={scan} color='black'>
                    <Link
                      href={`https://${scan}/address/${data.owner}`}
                      isExternal>
                      View on {scan}
                    </Link>
                  </MenuItem>
                ))}
                <MenuItem color='black'>
                  <Link href={`https://opensea.io/${data.owner}`} isExternal>
                    View on opensea.io
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          {data.description && <Text mb={4}>{data.description}</Text>}
          {!!signerAddr && isLoggedIn ? (
            <Button
              colorScheme='gray'
              mt={4}
              size='md'
              variant='outline'
              width='100%'
              _hover={{
                backgroundColor: 'gray.200',
                color: 'black',
              }}
              onClick={() => surveyResponseDispatch({ type: 'startSurvey' })}>
              <Emoji mr='0.5ch' aria-label='Right Arrow'>
                {' '}
                ➡️{' '}
              </Emoji>{' '}
              Start
            </Button>
          ) : (
            <Box as='span' color='black'>
              <Login login />
            </Box>
          )}
        </Box>
      ) : (
        <SurveyQuestionStepper />
      )}
    </Box>
  );
};
