import React, { useState } from "react";
import serviceBanner from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const ServicesBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${serviceBanner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "#00000075",
      }}
    >
      <div className="text-white flex justify-between">
        <div className="px-4 md:px-29 min-h-[80vh]  md:flex justify-between items-center gap-5">
          <div className="w-1/1 md:w-2/4 space-y-4 md:space-y-9 ">
            <h1 className="pt-9 text-2xl md:text-4xl font-semibold ">
              A Wealth of Experience To Heal And Help You.
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            <button className="px-4 md:px-8 py-2 md:py-4 bg-white text-black">
              Take an Appointment
            </button>
          </div>
          {/* mobile shape */}
          <div className="mt-5 md:mt-0 md:w-2/4 flex justify-center md:justify-end my-5 lg:my-0">
            <div className="border-1 p-5 rounded-2xl shadow-2xl">
              <DayPicker
                animate
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
