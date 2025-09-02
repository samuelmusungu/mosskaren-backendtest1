import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import FeaturedMenu from "@/components/FeaturedMenu";
import TeamSpotlight from "@/components/TeamSpotlight";
import EventsCalendar from "@/components/EventsCalendar";
import LocationMap from "@/components/LocationMap";
import SocialWall from "@/components/SocialWall";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Gallery /> {/* Moved up */}
        <FeaturedMenu />
        <TeamSpotlight />
        <EventsCalendar />
        <LocationMap />
        <SocialWall />
        <Testimonials /> {/* Moved down */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;