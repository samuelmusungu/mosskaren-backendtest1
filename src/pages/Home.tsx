import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import FeaturedMenu from "@/components/FeaturedMenu";
import TeamSpotlight from "@/components/TeamSpotlight";
import EventsCalendar from "@/components/EventsCalendar";
import SocialWall from "@/components/SocialWall";
import Testimonials from "@/components/Testimonials";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Gallery />
        <FeaturedMenu />
        <TeamSpotlight />
        <EventsCalendar />
        <Testimonials />
        <LocationMap /> {/* Moved below Testimonials */}
        <SocialWall />
      </main>
      <Footer />
    </div>
  );
};

export default Home;