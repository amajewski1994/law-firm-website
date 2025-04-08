import "./index.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Opinions from "./components/Opinions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default function App() {

  return (
    <div className="font-[var(--font-main)] text-[var(--color-text)] bg-[var(--color-bg)]">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Team />
      <Opinions />
      <Contact />
      <Footer />
    </div>
  );
}
