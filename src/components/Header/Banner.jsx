import React from "react";
import ProfileImage from "./ProfileImage";
import Toggle from "./Toggle";

const Banner = () => {
  return (
    <div className="relative mt-4 box border-2">
      <ProfileImage />
      <div className="absolute top-16 left-56">
        <h1 className="text-white text-3xl font-bold">TheUltimateDragonNADE</h1>
        <Toggle />
      </div>
    </div>
  );
};

export default Banner;
