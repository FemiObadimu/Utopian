import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div
      style={{ backgroundColor: "black", color: "white", marginTop: "50px" }}
    >
      <div className="col-md-12 text-center">
        <p className="py-4">Copyright {date} Utopian Studios... </p>
      </div>
    </div>
  );
};

export default Footer;
