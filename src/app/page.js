import { About, Contact, Works } from "@/app/sections";
import { Header } from "./components";

import AnimatedSection from "./components/AnimatedSection";

const Home = () => {
  return (
    <section className="container mx-auto">
      <Header />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <Works />
      <Contact />
    </section>
  );
};

export default Home;
