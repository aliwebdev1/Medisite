import React from "react";

import news1 from "../../../assets/images/news1.png";
import news2 from "../../../assets/images/news2.png";
import news3 from "../../../assets/images/news3.png";
import Blog from "./Blog";
const News = () => {
  const newsData = [
    {
      img: news1,
      name: "Breaking stereotypes: Female basketball stars rise at Uttara tournament",
      des: "Deshi Ballers is a pioneer. It has been seven years of constant efforts to dismantle gender stereotypes and create a supportive space where female basketball lovers can dream bigger, ",
    },
    {
      img: news2,
      name: "Ratargul and rain: A monsoon tale in motion",
      des: "Experience serene monsoon travel in Sunamganj and Sylhet with a peaceful Tanguar Haor boat stay, breathtaking Niladri Lake,",
    },
    {
      img: news3,
      name: "The agencies had information, but not about the extent of the violence",
      des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC ",
    },
  ];

  return (
    <div className=" px-4 md:px-29 pt-10">
      <div className="text-center lg:w-2/4 mx-auto my-10">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-3 lg:mb-5">
          News & Events
        </h1>
        <p className="text-justify lg:text-center">
          Popular belief, Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC, making it over 2000
          years old. Richard McCl intock,
        </p>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
        {newsData.map((news) => (
          <Blog news={news} key={news.name}></Blog>
        ))}
      </div>
    </div>
  );
};

export default News;
