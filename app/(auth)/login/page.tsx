import SignInForm from '@/components/SignIn/SignInForm';
import React from 'react';
import SignInLink from '@/components/SignIn/SignInLink';
import SignInButtons from '@/components/SignIn/SignInButtons';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth';
import { redirect } from 'next/navigation';

const Login = async () => {
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
        formActionText='Login'
        linkActionText='New to Netflix?'
        linkAction='Sign Up'
      />
      <SignInLink
        name='Sign Up Link'
        linkActionText='New to Netflix?'
        linkHref='/sign_up'
        linkAction='Sign Up'
      />
      <SignInButtons />
    </div>
  );
};

export default Login;
