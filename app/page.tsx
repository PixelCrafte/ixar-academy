import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses, { CareerCTA } from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <CareerCTA />
      <Contact />
      <Footer />
    </main>
  );
}
