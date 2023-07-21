import React, { useState } from "react";
import ToggleComponent from "./ToggleComponent";
import { useAppContext } from "../../AppContext";

const Toggle = () => {
  const { setToggleStatus } = useAppContext();
  const { setItemValue } = useAppContext();

  const [month, setMonth] = useState(true);
  const [year, setYear] = useState(false);

  const monthClickHandler = () => {
    setYear(false);
    setMonth(true);
    setToggleStatus(true);
    setItemValue({
      normal: "$4.95",
      gold: "$9.95",
      platinum: "$24.95",
    });
  };

  const yearClickHandler = () => {
    setMonth(false);
    setYear(true);
    setToggleStatus(false);
    setItemValue({
      normal: "$48.99",
      gold: "$108.99",
      platinum: "$288.99",
    });
  };

  return (
    <div className="w-60 h-10 border-2 rounded ml-6 mt-4 flex items-center justify-center">
      <div className="flex justify-between w-full text-white">
        <ToggleComponent
          toggleOption={"Monthly"}
          toggleType={month}
          onClick={monthClickHandler}
          className={
            "w-1/2 h-8 mx-0.5 flex items-center justify-center rounded cursor-pointer"
          }
          customStyleIfTrue={"bg-[#332b2b] text-yellow-400"}
          customStyleIffalse={""}
        />
        <ToggleComponent
          toggleOption={"Yearly"}
          toggleType={year}
          onClick={yearClickHandler}
          className={
            "w-1/2 h-8 mx-0.5 flex items-center justify-center rounded cursor-pointer"
          }
          customStyleIfTrue={"bg-[#332b2b] text-yellow-400"}
          customStyleIffalse={""}
        />
      </div>
    </div>
  );
};

export default Toggle;
