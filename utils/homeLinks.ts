interface linkProps {
  name: string;
  href: string;
}

export const links: linkProps[] = [
  { name: 'Home', href: '/home' },
  { name: 'TV Shows', href: '/home/shows' },
  { name: 'Movies', href: '/home/movies' },
  { name: 'Recently Added', href: '/home/recently' },
  { name: 'My List', href: '/home/user/list' },
];
