
import Banner from './banner/Banner';
import ServiceCount from '@/app/components/ui/ServiceCount/ServiceCount';
import Testimonial from './components/testimonial/Testimonial';
import Benefits from './components/Benefits/Benefits';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceCount />
      <Benefits></Benefits>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;