import React from "react";
import facebook from "../../../assets/icons/blackFacebook.png";
import google from "../../../assets/icons/blackGoogle.png";
import twitter from "../../../assets/icons/blackTwitter.png";
import linkedIn from "../../../assets/icons/blackLinkdin.png";

const Expert = ({ expert }) => {
  const { img, name, designation } = expert;
  return (
    <div className="card  bg-base-100  text-center">
      <div className="bg-[#E6F7FC] pt-5 lg:pt-15">
        <img className="w-auto md:w-auto h-32 lg:h-68 " src={img} alt={name} />
      </div>

      <div className="card-body">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-primary">{designation}</p>
        <div className="flex justify-between px-3 md:px-10 mt-5">
          <div className="bg-accent h-7 w-7 rounded-full flex justify-center items-center">
            <img src={facebook} alt="" />
          </div>
          <div className="bg-accent h-7 w-7 rounded-full flex justify-center items-center">
            <img className="bg-accent" src={google} alt="" />
          </div>
          <div className="bg-accent h-7 w-7 rounded-full flex justify-center items-center">
            <img className="bg-accent" src={twitter} alt="" />
          </div>
          <div className="bg-accent h-7 w-7 rounded-full flex justify-center items-center">
            <img className="bg-accent" src={linkedIn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
