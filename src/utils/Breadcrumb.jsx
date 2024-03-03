import React from "react";
import brownArrow from "../assets/images/arrow_curved.png";
import blackArrow from "../assets/images/arrow_curved_black.png";

const Breadcrumb = ({ link = "#!", main, page }) => {
  return (
    <div className="flex items-center gap-2 ">
      <img src={blackArrow} alt="" />
      <a href={link}>{main}</a>
      <img src={blackArrow} alt="" />
      <p className="text-primary">{page}</p>
      <img src={brownArrow} alt="" />
    </div>
  );
};

export default Breadcrumb;
