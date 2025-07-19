import React from "react";
import service from "../../../assets/icons/24HourSservice.png";
import doctor from "../../../assets/icons/doctor.png";
import car from "../../../assets/icons/EmergencyCarr.png";
import room from "../../../assets/icons/OperatingRoom.png";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const infoCardsData = [
    {
      img: service,
      name: "24 Hours Service",
      des: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    },
    {
      img: doctor,
      name: "Qualified Doctor",
      des: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    },
    {
      img: car,
      name: "Emergency Care",
      des: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    },
    {
      img: room,
      name: "Operation Theater",
      des: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    },
  ];

  return (
    <div className="px-4 md:px-29 mt-24 mb-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {infoCardsData.map((infoData) => (
          <InfoCard infoData={infoData} key={infoData.name}></InfoCard>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
