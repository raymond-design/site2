import React from "react";
import Medium from "../../assets/mediumicon.png";


const MediumIcon = ({ className }) => {
  return (
    <image
      viewBox="0 0 24 24"
      className={className}>
      <img src={Medium} alt="Medium Icon" />
    </image>
  );
};

export default MediumIcon;
