import React from 'react';
import SignInButton from './SignInButton';
import Google from '@/public/google.svg';
import Github from '@/public/github.svg';

const SignInButtons = () => {
  return (
    <div
      className='
        flex
        w-full
        justify-center
        items-center
        gap-x-3
        mt-6
      '
    >
      <SignInButton
        buttonIcon={Google}
        buttonAlt='google'
        iconClasses='
            w-6
            h-6
          '
      />
      <SignInButton
        buttonIcon={Github}
        buttonAlt='github'
        iconClasses='
            w-4
            h-4
          '
      />
    </div>
  );
};

export default SignInButtons;
