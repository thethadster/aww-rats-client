import React from 'react';
import { Button } from '~/components/game/Button';
import { GameIcon } from '~/types/game';

export const Styleguide = () => {
  return (
    <div className='mx-auto max-w-xl py-20 px-4'>
      <div className='mb-4'>
        <h1 className='text-xl text-white mb-2'>Buttons</h1>
        <div className='flex mt-2'>
          <Button mr='2'>Primary</Button>
          <Button mr='2' buttonType='secondary'>
            Secondary
          </Button>
          <Button mr='2' buttonType='destructive'>
            Destructive
          </Button>
        </div>
        <div className='flex mt-2'>
          <Button mr='2' icon={GameIcon.Energy} iconNumber={5}>
            Primary
          </Button>
          <Button
            mr='2'
            icon={GameIcon.Energy}
            iconNumber={5}
            buttonType='secondary'>
            Secondary
          </Button>
          <Button
            mr='2'
            icon={GameIcon.Energy}
            iconNumber={5}
            buttonType='destructive'>
            Destructive
          </Button>
        </div>
      </div>
    </div>
  );
};
