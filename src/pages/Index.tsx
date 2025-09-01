import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Menu />
      <Location />
      <Reservations />
      <Footer />
    </div>
  );
};

export default Index;
