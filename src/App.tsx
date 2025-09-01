import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/About";
import MenuPage from "./pages/Menu";
import LocationPage from "./pages/Location";
import ReservationsPage from "./pages/Reservations";
import NotFound from "./pages/NotFound";
import Contact from "@/pages/Contact";
import ThankYou from "@/pages/ThankYou";
import NewsletterConfirmation from "@/pages/NewsletterConfirmation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/newsletter-confirmation" element={<NewsletterConfirmation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        {/* Floating Reserve CTA + WhatsApp */}
        <div className="fixed bottom-6 right-6 z-50 space-y-3">
          <a
            href="/reservations"
            className="block bg-primary text-white px-5 py-3 rounded-full shadow-lg hover:bg-primary/90 transition"
          >
            Reserve Now
          </a>

          <a
            href="https://wa.me/254757436746"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
          >
            💬 WhatsApp Us
          </a>
        </div>

        {/* Floating Chat Bubble (Contact Page Link) */}
        <div className="fixed bottom-6 left-6 z-50">
          <a
            href="/contact"
            className="bg-white text-primary px-4 py-3 rounded-full shadow-lg border border-border hover:bg-white/90 transition"
          >
            💬 Chat with Us
          </a>
        </div>
      </>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;