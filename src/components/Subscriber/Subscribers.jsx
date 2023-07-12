import React from "react";
import SubType from "./SubType";
import SubDescription from "./SubDescription";

const Subscribers = () => {
  return (
    <div className="flex bg-gray-600">
      <div className="pt-14 w-1/2">
        <h1 className="text-2xl font-medium text-yellow-400 ml-7">
          Join this channel to get access to <br /> community perks
        </h1>
        <SubType />
      </div>
      <div className="mt-4 w-1/2 bg-[#222222]">
        <SubDescription />
      </div>
    </div>
  );
};

export default Subscribers;
