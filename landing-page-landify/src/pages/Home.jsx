import { Box } from "@chakra-ui/react";
import { Footer } from "../components/Common/Footer";
import { CTA } from "../components/Home/CTA";
import { Client } from "../components/Home/Client";
import { Clouds } from "../components/Home/Clouds";
import { Features } from "../components/Home/Features";
import { Hero } from "../components/Home/Hero";
import { Metrics } from "../components/Home/Metrics";
import { Testinomial } from "../components/Home/Testimonial";

const Home = () => {
  return (
    <Box>
      <Hero/>
      <Client/>
      <Features/>
      <Testinomial/>
      <Metrics/>
      <Clouds/>
      <CTA/>
      <Footer/>
    </Box>
  )
}

export { Home };
