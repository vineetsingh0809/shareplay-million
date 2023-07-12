import { block } from "million/react";
import React from "react";

const TopHeader = block(function topHeader() {
  return (
    <div className="text-white w-full relative border-2 border-gray-800 h-12 bg-gray-600 flex items-center justify-center">
      <h2 className="text-2xl">Channel Subscription</h2>
      <p className="text-4xl absolute top-0 right-4">×</p>
    </div>
  );
});

export default TopHeader;
