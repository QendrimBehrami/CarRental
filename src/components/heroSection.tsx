// HeroSection.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

import audiA8Image from "@/assets/audi-a8.png";

const HeroSection: React.FC = () => {
  return (
    <div className="hero bg-base-200 flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 hero-content">
        <div className="max-w-md text-center lg:text-left leading-normal">
          <h1 className="mb-5 text-5xl font-bold tracking-tight">
            Welcome to CarRental
          </h1>
          <p className="mb-5 text-slate-800">
            Providing you with the best rental experience, anywhere, anytime.
          </p>
          <div className="flex justify-center lg:justify-start gap-2">
            <Button className="shadow-xl">Book Car</Button>
            <Button
              variant="outline"
              className="group border border-slate-800 shadow-xl"
            >
              Learn more
              <ChevronRight
                className="transition-transform transform group-hover:translate-x-1 "
                width={"12px"}
              />
            </Button>
          </div>
        </div>
        <div>
          <img
            src={audiA8Image}
            alt="hero"
            className="rounded-box max-w-sm md:max-w-md lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
