import { VStack } from '@chakra-ui/react';
import React, { FC, useContext } from 'react';
import { Image } from '~/components/shared/Image';
import Login from '~/components/access/Login';
import { EthersContext } from '~/components/context/EthersContext';
import RatRace from '~/assets/svg/RatRace.svg';

const AuthCookieRequired: FC = ({ children }) => {
  const { isLoggedIn } = useContext(EthersContext);

  if (!isLoggedIn) {
    return (
      <VStack alignItems='center' maxW='100vw' pt={4}>
        <Image src={RatRace} alt='The Rat Race' />
        <Login />
      </VStack>
    );
  }

  return <>{children}</>;
};

export default AuthCookieRequired;
