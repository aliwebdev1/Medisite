import React from "react";

const InfoCard = ({ infoData }) => {
  const { img, name, des } = infoData;
  return (
    <div className="card py-10 bg-base-100 shadow-lg text-center hover:bg-[#C7F2FF]">
      <div className="flex justify-center items-center">
        <div className="bg-[#F3FCFF] w-17 h-17 rounded-full flex justify-center items-center">
          <img src={img} alt={name} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default InfoCard;
