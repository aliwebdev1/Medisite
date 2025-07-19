import React from "react";
import mobileShape from "../../../assets/images/mobileShape.png";
import bg from "../../../assets/images/bg.png";
import doctor from "../../../assets/images/Doctor.png";

const Banner = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white flex justify-between">
        <div className="px-4 md:px-29 py-15 md:py-20 min-h-screen  md:flex justify-between items-center gap-5">
          <div className="w-1/1 md:w-2/4 space-y-4 md:space-y-9 ">
            <h1 className="pt-9 text-2xl md:text-4xl font-semibold ">
              A Wealth of Experience To Heal And Help You.
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <button className="px-4 md:px-8 py-2 md:py-4 bg-white me-6  text-black">
              See More
            </button>
            <button className="px-4 md:px-8 py-2 md:py-4 bg-white text-black">
              Make an Appointment
            </button>
          </div>
          {/* mobile shape */}
          <div className="mt-5 md:mt-0 md:w-2/4">
            <div className="flex justify-center md:justify-end">
              <div className="w-[250px] h-[500px] bg-base-200 rounded-3xl shadow-xl/30 flex justify-center items-center">
                <div className="relative ">
                  <img className="" src={mobileShape} alt="" />
                  <div className="absolute top-15 space-y-12">
                    <img src={doctor} alt="" />
                    <h4 className="text-3xl md:text-5xl text-center ">
                      {" "}
                      Lorem Ipsum
                    </h4>
                    <div className="flex justify-center">
                      <button className="btn btn-primary rounded-4xl mx-auto">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
