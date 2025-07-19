import React from "react";
import doctor1 from "../../../assets/images/pic1.png";
import doctor2 from "../../../assets/images/pic2.png";
import doctor3 from "../../../assets/images/pic3.png";
import doctor4 from "../../../assets/images/pic4.png";
import Expert from "./Expert";

const ExpertTeam = () => {
  const experts = [
    {
      img: doctor1,
      name: "2Patrik Cortez",
      designation: "Doctor",
    },
    {
      img: doctor4,
      name: "2Patrik Cortez",
      designation: "Doctor",
    },
    {
      img: doctor2,
      name: "2Patrik Cortez",
      designation: "Doctor",
    },
    {
      img: doctor3,
      name: "2Patrik Cortez",
      designation: "Doctor",
    },
  ];

  return (
    <div className=" px-4 md:px-29">
      <div className="text-center lg:w-2/4 mx-auto my-10">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-3 lg:mb-5">
          Our ExpertTeam
        </h1>
        <p className="text-justify lg:text-center">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock,
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {experts.map((expert) => (
          <Expert expert={expert} key={expert.name}></Expert>
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;
