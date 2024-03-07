import { Car } from "lucide-react";
import Selection from "./components/ui/selection";

const Booking: React.FC = () => {
  return (
    <div className="section">
      <h1>Booking</h1>
      <div id="booking-selection"></div>
      <Selection
        icon={<Car />}
        title="Select your car"
        type="text"
        options={["Audi A8", "Audi A6", "Audi A4", "Audi R8"]}
      />
    </div>
  );
};

export default Booking;
