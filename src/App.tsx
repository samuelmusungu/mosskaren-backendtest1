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

        {/* Floating WhatsApp Icon Only */}
<div className="fixed bottom-6 right-6 z-50">
  <a
    href="https://wa.me/254757436746"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
    aria-label="WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.17 1.6 6L0 24l6.17-1.61a11.94 11.94 0 005.83 1.49c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22.02c-1.87 0-3.7-.5-5.3-1.45l-.38-.22-3.67.96.98-3.57-.24-.37A9.96 9.96 0 012.02 12c0-5.51 4.47-9.98 9.98-9.98S22 6.49 22 12s-4.47 10.02-10 10.02zm5.27-7.54c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.48h-.55c-.19 0-.48.07-.73.36-.26.29-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2.01 3.06 4.87 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
    </svg>
  </a>
</div>

        {/* Floating Email Icon */}
<div className="fixed bottom-6 left-6 z-50">
  <a
    href="/contact"
    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
    aria-label="Email"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="24"
      height="24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
      />
    </svg>
  </a>
</div>
      </>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;