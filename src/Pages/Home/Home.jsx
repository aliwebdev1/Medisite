import React from "react";
import Banner from "./Banner/Banner";
import InfoCards from "./InfoCards/InfoCards";
import Advocate from "./Advocate/Advocate";
import ExpertTeam from "./ExpertTeam/ExpertTeam";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import News from "./News/News";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Advocate></Advocate>
      <ExpertTeam></ExpertTeam>
      <MakeAppointment
        title="Make An Appointment"
        button="Confirm"
      ></MakeAppointment>
      <News></News>
    </div>
  );
};

export default Home;
