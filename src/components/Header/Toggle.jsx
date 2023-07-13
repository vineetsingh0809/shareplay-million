import React, { useState } from "react";

const Toggle = (props) => {
  const [month, setMonth] = useState(true);
  const [year, setYear] = useState(false);
  const [type, setType] = useState("Monthly");

  const monthClickHandler = () => {
    setYear(false);
    setMonth(true);
    setType("Monthly");
  };

  const yearClickHandler = () => {
    setMonth(false);
    setYear(true);
    setType("Yearly");
  };

  props.onData(type);

  return (
    <div className="w-60 h-10 border-2 rounded ml-6 mt-4 flex items-center justify-center">
      <div className="flex justify-between w-full text-white">
        <div
          className={`w-1/2 h-8 mx-0.5 flex items-center justify-center rounded cursor-pointer ${
            month ? "bg-[#332b2b] text-yellow-400" : ""
          }`}
          onClick={monthClickHandler}
        >
          <p>Monthly</p>
        </div>
        <div
          className={`w-1/2 h-8 mx-0.5 flex items-center justify-center rounded cursor-pointer ${
            year ? "bg-[#332b2b] text-yellow-400" : ""
          }`}
          onClick={yearClickHandler}
        >
          <p>Yearly</p>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
