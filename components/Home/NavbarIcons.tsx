import React from 'react';
import { Search, Bell } from 'lucide-react';
import UserNav from './UserNav';

const NavbarIcons = () => {
  return (
    <div
      className='
        flex
        items-center
        gap-x-8
        '
    >
      <Search
        className='
        w-5 
        h-5
        text-gray-300
        cursor-pointer
      '
      />
      <Bell
        className='
        w-5 
        h-5
        text-gray-300
        cursor-pointer
      '
      />
      <UserNav />
    </div>
  );
};

export default NavbarIcons;
