import React from 'react';
import Image from 'next/image';
import BackgroundImage from '../../public/login_background.jpg';
import Logo from '../../public/netflix_logo.svg';
import NetflixLogoLink from '@/components/NetflixLogoLink';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='
        relative
        flex
        h-screen
        w-screen
        flex-col
        bg-black
        md:items-center
        md:justify-center
        md:bg-transparent
    '
    >
      <Image
        priority
        fill
        src={BackgroundImage}
        alt='background image'
        className='
            hidden 
            brightness-50
            -z-10
            sm:flex 
            sm:object-cover
        '
      />
      <NetflixLogoLink linkClasses='w-32 absolute top-[7.5%] left-[5%]' />
      {children}
    </div>
  );
};

export default AuthLayout;
