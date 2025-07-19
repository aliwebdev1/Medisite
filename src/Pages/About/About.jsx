import React from "react";
import ExpertTeam from "../Home/ExpertTeam/ExpertTeam";
import News from "../Home/News/News";
import InfoCards from "../Home/InfoCards/InfoCards";

const About = () => {
  return (
    <div className="mt-25 md:mt-30">
      <ExpertTeam></ExpertTeam>
      <InfoCards></InfoCards>
      <News></News>
    </div>
  );
};

export default About;
