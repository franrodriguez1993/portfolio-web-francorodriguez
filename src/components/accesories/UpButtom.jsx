import React from "react";
import "../../css/UpButtom.css";
import upButtom from "../../svg/up.svg";

const UpButtom = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <img
      src={upButtom}
      alt="upbuttom"
      className="upbuttom"
      onClick={handleScrollToTop}
    />
  );
};

export default UpButtom;
