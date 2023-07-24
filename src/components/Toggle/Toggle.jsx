import React, { useState } from "react";
import ToggleComponent from "./ToggleComponent";
import { useAppContext } from "../../Context-Provider/AppContext";
import { toggleData } from "../../Data/toggleData";

const Toggle = () => {
  const { setToggleStatus } = useAppContext();

  const [toggleActive, setToggleActive] = useState(toggleData[0].id);

  const toggleChangeHandler = (id, data) => {
    setToggleActive(id);
    setToggleStatus(data);
  };

  return (
    <div className="w-auto h-10 border-2 rounded ml-6 mt-4 flex items-center justify-center">
      <div className="flex justify-between w-full text-white">
        {toggleData.map((item) => (
          <ToggleComponent
            key={item.id}
            toggleOption={item.data}
            toggleType={toggleActive === item.id}
            onClick={() => toggleChangeHandler(item.id, item.data)}
            className={
              "w-1/2 h-8 mx-0.5 flex items-center justify-center rounded cursor-pointer"
            }
            customStyleIfTrue={"bg-[#332b2b] text-yellow-400"}
            customStyleIffalse={""}
          />
        ))}
      </div>
    </div>
  );
};

export default Toggle;
