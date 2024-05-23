import Navbar from '@/components/Home/Navbar';
import { authOptions } from '@/utils/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  }
  return (
    <div>
      <Navbar />
      <main
        className='
        w-full 
        max-w-7xl 
        mx-auto
        sm:px-6
        lg:px-8
      '
      >
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;
