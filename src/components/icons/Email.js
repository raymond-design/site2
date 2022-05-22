import React from "react";
import email from "../../assets/mail.png";


const EmailIcon = ({ className }) => {
  return (
    <image
      viewBox="0 0 24 24"
      className={className}>
      <img src={email} alt="Medium Icon" />
    </image>
  );
};

export default EmailIcon;
