import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">The Moss Karen</h1>
              <p className="text-xs text-muted-foreground">Restaurant & Bar</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/menu"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/menu' ? 'text-primary font-semibold' : ''}`}
            >
              Menu
            </Link>
            <Link 
              to="/location"
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/location' ? 'text-primary font-semibold' : ''}`}
            >
              Location
            </Link>
            <Link to="/reservations">
              <Button className="bg-secondary hover:bg-secondary/90">
                Reserve Table
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/"
                onClick={closeMenu}
                className={`text-left text-foreground hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary font-semibold' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/about"
                onClick={closeMenu}
                className={`text-left text-foreground hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary font-semibold' : ''}`}
              >
                About
              </Link>
              <Link 
                to="/menu"
                onClick={closeMenu}
                className={`text-left text-foreground hover:text-primary transition-colors ${location.pathname === '/menu' ? 'text-primary font-semibold' : ''}`}
              >
                Menu
              </Link>
              <Link 
                to="/location"
                onClick={closeMenu}
                className={`text-left text-foreground hover:text-primary transition-colors ${location.pathname === '/location' ? 'text-primary font-semibold' : ''}`}
              >
                Location
              </Link>
              <Link to="/reservations" onClick={closeMenu}>
                <Button className="bg-secondary hover:bg-secondary/90 w-fit">
                  Reserve Table
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;