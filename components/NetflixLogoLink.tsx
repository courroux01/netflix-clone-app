import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/netflix_logo.svg';

interface NetflixLogoLinkProps {
  linkClasses: string;
}
const NetflixLogoLink = ({ linkClasses }: NetflixLogoLinkProps) => {
  return (
    <Link href='/home' className={`select-none ${linkClasses}`}>
      <Image priority src={Logo} alt='Netflix' />
    </Link>
  );
};

export default NetflixLogoLink;
