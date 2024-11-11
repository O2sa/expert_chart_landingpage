import Header from "../sections/Header.jsx";
import Hero from "../sections/Hero.jsx";
import Features from "../sections/Features.jsx";
import Faq from "../sections/Faq.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import About from "../sections/About.jsx";
import MovingCards from "../sections/MovingCards.jsx";
import Start from "../sections/Start.jsx";
import Markets from "../sections/Markets.jsx";
import FeaturesSection from "../sections/Features2.jsx";

const Landingpage = () => {
  return (
    <div >
      <Hero />
      <Markets />

      <About />

      <FeaturesSection />
      <Features />
      <Start />
      <Faq />
    </div>
  );
};





export default Landingpage;
