import React from "react";

const ToggleComponent = ({
  toggleOption,
  toggleType,
  onClick,
  className,
  customStyleIfTrue,
  customStyleIffalse,
}) => {
  return (
    <div
      className={`${className} ${
        toggleType ? customStyleIfTrue : customStyleIffalse
      }`}
      onClick={onClick}
    >
      <p>{toggleOption}</p>
    </div>
  );
};

export default ToggleComponent;
