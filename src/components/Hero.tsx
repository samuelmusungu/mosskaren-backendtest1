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
          
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Restaurant & Bar
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Experience exquisite dining in the heart of Karen. Where culinary excellence meets warm hospitality in an atmosphere of refined elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/reservations">
              <Button 
                size="lg"
                variant="premium"
                className="px-8 py-4 text-lg font-semibold animate-pulse hover:animate-none"
              >
                Reserve Your Table
              </Button>
            </Link>
            <Link to="/menu">
              <Button 
                size="lg"
                variant="hero"
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
        <div className="hidden md:block absolute top-1/3 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
            <Wine className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;