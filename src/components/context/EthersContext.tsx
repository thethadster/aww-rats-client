import { createContext, FC, useEffect, useState } from 'react';
import { useEthers } from '~/hooks/useEthers';
import { Closet, EthersContextType, Rat } from '~/types';
import RatABI from 'smart-contracts/artifacts/src/contracts/Rat.sol/Rat.json';
import ClosetABI from 'smart-contracts/artifacts/src/contracts/Closet.sol/Closet.json';
import { CONTRACT_ADDRESS, CHAIN_ID, CLOSET_ADDRESS } from '~/config/env';
import { ethers } from 'ethers';

const defaultEthersContext: EthersContextType = {
  isLoggedIn: false,
  setLoggedIn: () => {},
  connectToMetamask: () => undefined,
};

export const EthersContext = createContext(defaultEthersContext);

export const EthersContextProvider: FC = ({ children }) => {
  const [contract, setContract] = useState<Rat | undefined>();
  const [closet, setCloset] = useState<Closet | undefined>();
  const [signerAddr, setSignerAddr] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const etherState = useEthers();

  useEffect(() => {
    const { signer, connected, network, accounts } = etherState;

    if (typeof document !== 'undefined') {
      setLoggedIn(!!document?.cookie?.includes('wallet='));
    }

    (async () => {
      if (connected && network?.chainId === CHAIN_ID) {
        try {
          if (CONTRACT_ADDRESS) {
            const r = new ethers.Contract(
              CONTRACT_ADDRESS,
              RatABI.abi,
              signer,
            ) as Rat;
            setContract(r);
          }

          if (CLOSET_ADDRESS) {
            const c = new ethers.Contract(
              CLOSET_ADDRESS,
              ClosetABI.abi,
              signer,
            ) as Closet;
            setCloset(c);
          }
        } catch (err) {
          console.error(err);
        }
      }

      if (accounts?.[0]) {
        setSignerAddr(accounts[0]);
      }
    })();
  }, [etherState]);

  const connectToMetamask = async () => {
    try {
      await etherState.provider?.send('eth_requestAccounts', []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <EthersContext.Provider
      value={{
        ...etherState,
        contract,
        connectToMetamask,
        signerAddr,
        closet,
        isLoggedIn,
        setLoggedIn,
      }}>
      {children}
    </EthersContext.Provider>
  );
};
