import Header from "@/components/Header";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";

const ReservationsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Reservations />
      </div>
      <Footer />
    </div>
  );
};

export default ReservationsPage;