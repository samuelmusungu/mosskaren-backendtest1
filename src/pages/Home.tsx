import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FeaturedMenu from "@/components/FeaturedMenu";
import TeamSpotlight from "@/components/TeamSpotlight";
import EventsCalendar from "@/components/EventsCalendar";
import LocationMap from "@/components/LocationMap";
import SocialWall from "@/components/SocialWall";
import LoyaltyTeaser from "@/components/LoyaltyTeaser";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedMenu />
        <Gallery />
        <BrandStory />
        <TeamSpotlight />
        <Testimonials />
        <EventsCalendar />
        <LocationMap />
        <SocialWall />
        <LoyaltyTeaser />
      </main>
      <Footer />
    </div>
  );
};

export default Home;