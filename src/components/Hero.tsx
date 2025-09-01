import { Button } from "@/components/ui/button";
import { ChefHat, Wine, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-6 h-6 mr-2" />
            <span className="text-lg">Karen Plains, Nairobi</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Moss Karen
          </h1>

          <p className="text-xl md:text-2xl mb-2 text-white/90">
            Restaurant & Bar
          </p>

          <p className="text-base md:text-lg mb-6 text-white/70 italic">
            Nairobi’s destination for refined dining and unforgettable ambiance.
          </p>

          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Experience exquisite dining in the heart of Karen. Where culinary excellence meets warm hospitality in an atmosphere of refined elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reservations">
              <Button
                size="lg"
                variant="premium"
                aria-label="Reserve a table at The Moss Karen"
                className="px-8 py-4 text-lg font-semibold animate-pulse hover:animate-none"
              >
                Reserve Your Table
              </Button>
            </Link>
            <Link to="/menu">
              <Button
                size="lg"
                variant="hero"
                aria-label="View the Moss Karen menu"
                className="px-8 py-4 text-lg"
              >
                View Menu
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="hidden md:block absolute top-1/4 left-10 animate-float">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="hidden md:block absolute top-1/3 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
            <Wine className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <span className="text-white/70 animate-bounce text-sm">Scroll to explore ↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;