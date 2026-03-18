import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Trainers from "./components/Trainers";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
