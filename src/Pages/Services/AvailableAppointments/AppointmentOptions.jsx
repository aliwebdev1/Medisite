import React from "react";

const AppointmentOptions = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card shadow-2xl text-center hover:bg-[#C7F2FF]">
      <div className="card-body">
        <h2 className="text-xl font-semibold text-center text-primary">
          {name}
        </h2>
        <h3 className=" font-semibold text-center text-primary">
          Available {slots.length > 1 ? "Slots" : "Slot"} {slots.length}
        </h3>
        <p>{slots[0]}</p>
        <button className="btn btn-primary mt-3">Select your Date</button>
      </div>
    </div>
  );
};

export default AppointmentOptions;
