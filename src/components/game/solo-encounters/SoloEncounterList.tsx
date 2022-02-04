import { Box, HStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { GameContext } from '~/components/context/GameContext';
import { BattleThumbCard } from '~/components/game/BattleThumbCard';
import { useGetActiveEncountersQuery } from '~/schema/generated';
import { GameIconTypes } from '~/types/game';

export const SoloEncounterList = () => {
  const {
    soloEncountersResults: { data, loading, error },
    setSelectedEncounter,
  } = useContext(GameContext);
  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    console.log(error);
    return <Box>An error occurred. Please check the console</Box>;
  }

  return data ? (
    <Box overflow='scroll' py={4}>
      <HStack w='max-content'>
        {data.encounters.map((enc) => (
          <BattleThumbCard
            key={enc.id}
            image={enc.image || ''}
            title={enc.name}
            stats={[
              {
                label: 'Strength',
                icon: GameIconTypes.Strength,
                value: enc.power,
                showLabel: true,
              },
              {
                label: 'Energy',
                icon: GameIconTypes.Energy,
                value: enc.energy_cost,
                showLabel: true,
              },
              {
                label: 'Reward',
                icon: GameIconTypes.Reward,
                value: enc.reward.tokens,
                showLabel: true,
              },
            ]}
            onClick={() => {
              setSelectedEncounter(enc);
            }}
          />
        ))}
      </HStack>
    </Box>
  ) : null;
};
