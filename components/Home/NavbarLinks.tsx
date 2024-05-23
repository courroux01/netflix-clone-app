'use client';

import React from 'react';
import { links } from '@/utils/homeLinks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavbarLinks = () => {
  const pathName = usePathname();
  return (
    <ul
      className='
            lg:flex
            gap-x-4
            ml-14
            hidden
        '
    >
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link
              href={link.href}
              className={
                pathName === link.href
                  ? `
                      text-white
                      font-semibold
                      underline
                      underline-offset-4
                      decoration-[var(--auth-red)]
                    `
                  : `
                      text-gray-300
                      font-normal
                      text-sm
                    `
              }
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
