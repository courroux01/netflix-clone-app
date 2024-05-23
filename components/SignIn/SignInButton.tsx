'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

interface SignInButtonProps {
  buttonIcon: any;
  buttonAlt: string;
  iconClasses: string;
}
const SignInButton = ({
  buttonIcon,
  buttonAlt,
  iconClasses,
}: SignInButtonProps) => {
  return (
    <Button
      size='icon'
      onClick={() => signIn(buttonAlt)}
      className='
        transition-all
        hover:scale-[1.05]
      '
    >
      <Image
        priority
        src={buttonIcon}
        alt={buttonAlt}
        className={`
            object-cover 
            rounded-md

            ${iconClasses}
          `}
      />
    </Button>
  );
};

export default SignInButton;
