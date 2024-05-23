import Link from 'next/link';
import React from 'react';

interface SignInLinkProps {
  name: string;
  linkAction: string;
  linkHref: string;
  linkActionText: string;
}

const SignInLink = ({
  linkAction,
  linkHref,
  linkActionText,
}: SignInLinkProps) => {
  return (
    <div
      className='
        text-gray-500
        text-sm
        mt-2
        flex
        justify-center
        gap-2
        select-none
      '
    >
      <h2>{linkActionText}</h2>
      <Link
        href={linkHref}
        className='
            border-transparent
            border-b-2
            mb-[2px]
            text-white/80
            delay-100
            transition-border-b
            hover:border-[var(--auth-red)]
          '
      >
        {linkAction}
      </Link>
    </div>
  );
};

export default SignInLink;
