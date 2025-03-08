
import Navbar from "@/components/Navbar";
import RoomsSection from "@/components/RoomsSection";
import Footer from "@/components/Footer";

const Habitaciones = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <RoomsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Habitaciones;
