import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 transition-all duration-300">
      <div className="container mx-auto px-5 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="The Moss Karen Logo"
              className={`transition-all duration-300 ${
                scrolled ? "h-10" : "h-12"
              } w-auto group-hover:scale-105`}
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">The Moss Karen</h1>
              <p className="text-xs text-muted-foreground">Restaurant & Bar</p>
            </div>
          </Link>

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
            <div className="flex justify-center mb-4">
              <img
                src="/logo.png"
                alt="The Moss Karen Logo"
                className="h-10 w-auto"
              />
            </div>
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