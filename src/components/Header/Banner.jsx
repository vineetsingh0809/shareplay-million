import React from "react";
import ProfileImage from "./ProfileImage";
import Toggle from "./Toggle";
import ChannelName from "./ChannelName";
// import { block } from "million/react";

const Banner = () =>  {
  return (
    <div className="relative mt-4 box border-2">
      <ProfileImage />
      <div className="absolute top-16 left-56">
        <ChannelName />
        <Toggle />
      </div>
    </div>
  );
};

export default Banner;
