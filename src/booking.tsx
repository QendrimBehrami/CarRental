import { Car, MapPin, CalendarDays } from "lucide-react";
import Selection, { SelectionType } from "./components/ui/selection";

const Booking: React.FC = () => {
  return (
    <div id="booking-selection" className="aligned">
      <div className="py-8 lg:flex lg:flex-col ">
        <h1>Booking</h1>
        <br />

        <div className="mb-10">
          <Selection
            icon={<Car />}
            title="Select your car"
            type={SelectionType.Text}
            options={["Audi A8", "Audi A6", "Audi A4", "Audi R8"]}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-content-evenly">
          <Selection
            icon={<MapPin />}
            title="Pick-up location"
            type={SelectionType.Text}
            options={["Ingolstadt", "Munich", "Nuernberg", "Regensburg"]}
          />
          <Selection
            icon={<CalendarDays />}
            title="Pick-up Date"
            type={SelectionType.Date}
            options={undefined}
          />
          <Selection
            icon={<MapPin />}
            title="Drop-off location"
            type={SelectionType.Text}
            options={["Ingolstadt", "Munich", "Nuernberg", "Regensburg"]}
          />
          <Selection
            icon={<CalendarDays />}
            title="Drop-off Date"
            type={SelectionType.Date}
            options={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
