import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_1fr_1fr_1.5fr] gap-8 mb-12">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="The Moss Karen Logo"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">The Moss Karen</h3>
                <p className="text-sm opacity-80">Restaurant & Bar</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Experience exceptional dining in the heart of Karen Plains. Where
              culinary excellence meets warm hospitality.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 opacity-80" />
                <span className="text-sm">Karen Plains Road, Nairobi</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="text-sm">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="text-sm">info@themosskarren.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 opacity-80" />
                <div className="text-sm">
                  <p>Monday - Sunday</p>
                  <p className="opacity-80">11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <p className="text-xs opacity-60 mt-2">
                Kitchen closes at 10:30 PM
              </p>
            </div>
          </div>

          {/* Connect & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="flex space-x-4 mt-2">
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Newsletter</h4>
              <p className="text-sm opacity-80 mb-3">
                Get updates on specials, events, and exclusive offers.
              </p>
              <form className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-md bg-background text-foreground border border-border w-full sm:w-auto flex-grow"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="space-y-2 mt-6">
              <a
                href="#menu"
                className="block text-sm hover:text-primary transition-colors"
              >
                Menu
              </a>
              <a
                href="#reservations"
                className="block text-sm hover:text-primary transition-colors"
              >
                Reservations
              </a>
              <a
                href="#location"
                className="block text-sm hover:text-primary transition-colors"
              >
                Location
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © {currentYear} The Moss Karen. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="hover:text-primary transition-colors opacity-80"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors opacity-80"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;