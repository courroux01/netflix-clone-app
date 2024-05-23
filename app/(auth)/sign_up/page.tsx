import React from 'react';
import SignInForm from '@/components/SignIn/SignInForm';
import SignInLink from '@/components/SignIn/SignInLink';
import SignInButtons from '@/components/SignIn/SignInButtons';
import { authOptions } from '@/utils/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SignUp = async () => {
    if (await getServerSession(authOptions)) {
      return redirect('/home');
    }
  return (
    <div
      className='
        mt-24
        rounded
        bg-black/80
        py-10
        px-6
        text-center
        md:mt-0
        md:max-w-sm
        md:px-14
        select-none

      '
    >
      <SignInForm
        formActionText='Sign Up'
        linkActionText='Have an Account?'
        linkAction='Login'
      />
      <SignInLink
        name='Login Link'
        linkActionText='Have an Account?'
        linkHref='/login'
        linkAction='Login'
      />
      <SignInButtons />
    </div>
  );
};

export default SignUp;
