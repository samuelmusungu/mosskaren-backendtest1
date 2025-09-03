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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md"
          : "bg-gradient-to-r from-blue-50 via-white to-orange-50 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-5 py-4">
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
            {["Home", "About", "Menu", "Location"].map((item) => {
              const path = `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  to={path === "/home" ? "/" : path}
                  className={`text-sm font-medium text-muted-foreground hover:text-orange-500 transition ${
                    location.pathname === path || (path === "/" && location.pathname === "/")
                      ? "text-orange-500 font-semibold"
                      : ""
                  }`}
                >
                  {item}
                </Link>
              );
            })}
            <Link to="/reservations">
              <Button className="bg-orange-500 hover:bg-orange-600 transition-transform hover:scale-105">
                Reserve Table
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Location Pin */}
        <div className="flex items-center justify-center mt-2 text-sm text-muted-foreground">
          <svg className="w-4 h-4 text-orange-500 animate-bounce mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0C6.686 0 4 2.686 4 6c0 4.25 6 12 6 12s6-7.75 6-12c0-3.314-2.686-6-6-6zM10 8a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          Karen Plains, Nairobi
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4 pt-4 text-center">
              {["Home", "About", "Menu", "Location"].map((item) => {
                const path = `/${item.toLowerCase()}`;
                return (
                  <Link
                    key={item}
                    to={path === "/home" ? "/" : path}
                    onClick={closeMenu}
                    className={`text-sm text-muted-foreground hover:text-orange-500 transition ${
                      location.pathname === path || (path === "/" && location.pathname === "/")
                        ? "text-orange-500 font-semibold"
                        : ""
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
              <Link to="/reservations" onClick={closeMenu}>
                <Button className="bg-orange-500 hover:bg-orange-600 w-fit mx-auto mt-2">
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