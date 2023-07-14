import React from "react";

const SubscriberType = ({ value, onClick, SubType, SubscriberType, id }) => {
  return (
    <div
      className={`py-4 text-xl font-medium pl-7 ${
        SubType ? "bg-[#222222]" : ""
      }`}
      onClick={onClick}
    >
      <p className="cursor-pointer">{SubscriberType}</p>
      <p id={id} className="cursor-pointer">
        {value}
      </p>
    </div>
  );
};

export default SubscriberType;
