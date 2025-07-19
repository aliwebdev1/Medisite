import React from "react";

const Blog = ({ news }) => {
  const { img, name, des } = news;
  return (
    <div className="card shadow-lg bg-base-100  ">
      <img className="" src={img} alt={name} />

      <div className="p-5 ">
        <h2 className="text-xl font-semibold mb-4">{name}</h2>
        <p className="text-secondary">{des}</p>
      </div>
    </div>
  );
};

export default Blog;
