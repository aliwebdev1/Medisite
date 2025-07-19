import React from "react";
import advocate from "../../../assets/images/avvocate.png";
import advocate2 from "../../../assets/images/avvocate2.png";

const Advocate = () => {
  return (
    <div className="px-4 md:ml-29 py-10">
      <div className="lg:flex justify-between items-center gap-5">
        <div className=" md:w-1/3 space-y-10 mb-5 md:mb-0">
          <h1 className="text-3xl  md:text-4xl">
            Medicare Supplement Advocate
          </h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </p>
          <button className="btn btn-primary">See More</button>
        </div>
        <div className="md:w-2/3 flex justify-end">
          <div className="relative flex md:block justify-end">
            <img className="w-2/3 md:w-full" src={advocate} alt="" />
            <div className="w-1/2 md:w-auto absolute top-10 md:top-15 left-0 md:-left-34 custom-shadow z-40">
              <img className="rounded-lg " src={advocate2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advocate;
