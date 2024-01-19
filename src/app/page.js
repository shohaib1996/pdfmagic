
import Banner from './banner/Banner';
import ServiceCount from '@/app/components/ui/ServiceCount/ServiceCount';
import Testimonial from './components/testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceCount />
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;