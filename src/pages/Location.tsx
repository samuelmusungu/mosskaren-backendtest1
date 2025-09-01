import Header from "@/components/Header";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const LocationPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Location />
      </div>
      <Footer />
    </div>
  );
};

export default LocationPage;