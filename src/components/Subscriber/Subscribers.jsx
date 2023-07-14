import React from "react";
import SubType from "./SubType";
import TopSubDesc from "./TopSubDesc";
import ChannelInfo from "./ChannelInfo";

const Subscribers = () => {
  return (
    <div className="flex bg-gray-600">
      <div className="pt-14 w-1/2">
        <ChannelInfo />
        <SubType />
      </div>
      <div className="mt-4 w-1/2 bg-[#222222] rounded-2xl">
        <div className="px-6 py-4">
          <TopSubDesc />
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
