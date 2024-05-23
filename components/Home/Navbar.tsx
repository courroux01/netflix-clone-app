import React from 'react';
import NetflixLogoLink from '../NetflixLogoLink';
import NavbarLinks from './NavbarLinks';
import NavbarIcons from './NavbarIcons';

const Navbar = () => {
  return (
    <div
      className='
          flex
          items-center
          justify-between
          w-full
          select-none
          max-w-7xl
          py-5
          mx-auto
          px-5
          sm:px-6
          lg:px-8
      '
    >
      <div
        className='
        flex
        items-center
      '
      >
        <NetflixLogoLink linkClasses='w-32' />
        <NavbarLinks />
      </div>
      <NavbarIcons />
    </div>
  );
};

export default Navbar;
