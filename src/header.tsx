import React from "react";
import { Button } from "./components/ui/button";
import { CarFront } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="flex gap-2 items-center leading-tight">
            <CarFront width={24} height={24} />
            <strong>
              Car <br></br>Rental
            </strong>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Button>Book Now</Button>
      </div>
    </header>
  );
};

export default Header;
