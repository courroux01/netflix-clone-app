'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { signOut } from 'next-auth/react';

const UserNav = () => {
  const avatarUrl =
    'https://torjdhemwrssqvsuwlsy.supabase.co/storage/v1/object/public/user-image/avatar.png';
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='
                relative
                h-10
                w-10
                rounded-sm
            '
        >
          <Avatar
            className='
            h-10
            w-10
            rounded-sm
          '
          >
            <AvatarImage src={avatarUrl} alt='Avatar' />
            <AvatarFallback className='rounded-sm'>A</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-56 cursor-pointer select-none'
        align='end'
        forceMount
      >
        <DropdownMenuLabel>
          <div className='flex flex-col space-y-1'>
            <p
              className='
              text-sm
              font-medium
              leading-none
            '
            >
              Abed
            </p>
            <p
              className='
              text-xs
              text-muted-foreground
              leading-none
            '
            >
              abdullah.alojado@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className='cursor-pointer'>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
