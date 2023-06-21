import { Box } from '@chakra-ui/react';
import { Footer } from '../Components/Common/Footer';
import { CTA } from '../Components/Home/CTA';
import { Client } from '../Components/Home/Client';
import { Clouds } from '../Components/Home/Clouds';
import { Features } from '../Components/Home/Features';
import { Hero } from '../Components/Home/Hero';
import { Metrics } from '../Components/Home/Metrics';
import { Testinomial } from '../Components/Home/Testimonial';

const Home = () => {
  return (
    <Box>
      <Hero />
      <Client />
      <Features />
      <Testinomial />
      <Metrics />
      <Clouds />
      <CTA />
      <Footer />
    </Box>
  );
};

export { Home };
