import React from "react";

const HeroImage = ({ imageURL }) => {
  return (
    <div className="mt-14">
      <img
        src={imageURL}
        className="w-full shadow-lg rounded-lg border"
        alt="Hero"
      />
    </div>
  );
};

export default HeroImage;