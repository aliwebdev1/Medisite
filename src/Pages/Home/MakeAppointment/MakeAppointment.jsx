import React from "react";

const MakeAppointment = ({ title, button }) => {
  return (
    <div className="px-4 md:px-29 pt-10 lg:pt-29 ">
      <div className="text-center py-4 md:py-7 bg-[#C7F2FF]">
        <h3 className="text-2xl lg:text-3xl">{title}</h3>
      </div>
      <div>
        <form>
          <div className="grid lg:grid-cols-2 lg:gap-15 my-5 lg:my-15">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="input w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input w-full mt-4 md:mt-6 lg:mt-9"
              />
              <input
                type="text"
                placeholder="Additional Information"
                className="input w-full mt-4 md:mt-6 lg:mt-9"
              />
            </div>

            <div className="mt-4 md:mt-6 lg:mt-0">
              <input type="text" placeholder="Email" className="input w-full" />
              <input
                type="text"
                placeholder="Department"
                className="input w-full mt-4 md:mt-6 lg:mt-9"
              />
              <input
                type="text"
                placeholder="Date and Time"
                className="input w-full mt-4 md:mt-6 lg:mt-9"
              />
            </div>
          </div>
          <button className="btn btn-primary mx-auto block">{button}</button>
        </form>
      </div>
    </div>
  );
};

export default MakeAppointment;
