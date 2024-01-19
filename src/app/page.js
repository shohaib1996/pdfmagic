
import Image from 'next/image'
import Banner from './banner/Banner';
import ServiceCount from '@/components/ui/ServiceCount/ServiceCount';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceCount />
    </div>
  );
};

export default Home;