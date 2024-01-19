
import Benefits from '@/components/ui/Benefits/Benefits';
import Banner from './banner/Banner';
import ServiceCount from '@/app/components/ui/ServiceCount/ServiceCount';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceCount />
      <Benefits />
    </div>
  );
};

export default Home;