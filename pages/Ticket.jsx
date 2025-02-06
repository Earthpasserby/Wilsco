import Bfooter from "../components/Bfooter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OtherService from "../components/OtherService";
import TicketReservation from "../components/TicketReservation";

const Ticket = () => {
  return (
    <>
      <div className="w-full h-full">
        <Header />
        <TicketReservation />
        <OtherService />
        <Bfooter />
        <Footer />
      </div>
    </>
  );
};
export default Ticket;
