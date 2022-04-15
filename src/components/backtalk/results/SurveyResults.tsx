import {
  Flex,
  Heading,
  Spacer,
  Grid,
  GridItem,
  Progress,
  Text,
  Button,
  Box,
  FormControl,
  FormLabel,
  Switch,
  Center,
  useToast,
  Link,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import React, { FC, useContext, useEffect } from 'react';
import { SurveyResultsList } from '~/components/backtalk/results/SurveyResultsList';
import { BacktalkSurveyResultContext } from '~/components/context/BacktalkSurveyResults';
import { apolloBacktalkClient } from '~/lib/graphql';
import { useUpdateSurveyMutation } from '~/schema/generated';

export const SurveyResults: FC = () => {
  const {
    surveyResult: { data, loading: surveyLoading, error: surveyError, refetch },
  } = useContext(BacktalkSurveyResultContext);

  const [updateSurvey, { loading, error }] = useUpdateSurveyMutation({
    client: apolloBacktalkClient,
  });

  const toast = useToast();

  useEffect(() => {
    if (!loading && error) {
      toast({
        title: 'Error',
        description: 'Could not update survey',
        status: 'error',
        position: 'bottom-right',
        isClosable: true,
      });
    }
  }, [error, loading, toast]);

  useEffect(() => {
    if (!surveyLoading && surveyError) {
      toast({
        title: 'Error',
        description: 'Could not fetch survey',
        status: 'error',
        position: 'bottom-right',
        isClosable: true,
      });
    }
  }, [surveyError, surveyLoading, toast]);

  if (surveyLoading) {
    return <Center>Loading</Center>;
  }

  return data?.surveys_by_pk ? (
    <>
      <Flex align='baseline' my={2}>
        <Heading size='md'>{data.surveys_by_pk.title}</Heading>
        <Spacer />
        <FormControl display='flex' alignItems='center' w={32}>
          <FormLabel htmlFor='isactive' mb='0'>
            Activate
          </FormLabel>
          <Switch
            isChecked={data?.surveys_by_pk.is_active ?? false}
            onChange={async (e) => {
              if (data.surveys_by_pk?.id) {
                await updateSurvey({
                  variables: {
                    id: data.surveys_by_pk?.id,
                    surveyInput: {
                      is_active: e.currentTarget.checked,
                    },
                  },
                });

                await refetch();
              }
            }}
            isDisabled={loading}
            id='isactive'
          />
        </FormControl>
        <Button disabled colorScheme='teal' ml={2} size='xs'>
          Export
        </Button>
      </Flex>
      <Flex mb={4} alignItems='center'>
        <Link
          href={'https://awwrats.com/backtalk/survey/' + data.surveys_by_pk.id}>
          {'awwrats.com/backtalk/survey/' + data.surveys_by_pk.id}
        </Link>
      </Flex>
      <Grid gap={4} templateColumns='repeat(2, 1fr)'>
        <GridItem
          backgroundColor='white'
          border='1px'
          borderColor='gray.200'
          borderRadius={8}
          mb={4}
          p={4}>
          <Heading as='h2' color='gray.500' size='xs'>
            Responses
          </Heading>
          <Text fontSize='xl'>
            {!!data.surveys_by_pk.max_responses
              ? `${data?.surveys_by_pk?.response_count}/${data.surveys_by_pk.max_responses}`
              : data?.surveys_by_pk?.response_count}
          </Text>
          {!!data.surveys_by_pk.max_responses && (
            <Progress
              value={data?.surveys_by_pk?.response_count}
              max={data.surveys_by_pk.max_responses}
            />
          )}
        </GridItem>

        <GridItem
          backgroundColor='white'
          border='1px'
          borderColor='gray.200'
          borderRadius={8}
          mb={4}
          p={4}>
          <Heading as='h2' color='gray.500' size='xs'>
            Last Response
          </Heading>
          {!!data?.surveys_by_pk?.latest_response && (
            <Text fontSize='xl'>
              {format(
                new Date(data.surveys_by_pk.latest_response),
                "eeee, MMMM d, yyyy 'at' H:mm  (z)",
              )}
            </Text>
          )}
        </GridItem>
      </Grid>
      <SurveyResultsList />
    </>
  ) : (
    <Box>Survey Not Found</Box>
  );
};
