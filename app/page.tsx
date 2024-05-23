import { authOptions } from '@/utils/auth';
import { getServerSession } from 'next-auth';
import {redirect} from 'next/navigation';

const Home = async () => {
  const session = await getServerSession(authOptions);
  
};

export default Home;
