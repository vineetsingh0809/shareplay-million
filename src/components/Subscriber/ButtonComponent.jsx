import React from "react";

const ButtonComponent = ({ btnTitle, onClick, className, id }) => {
  return (
    <button onClick={onClick} className={className} id={id}>
      {btnTitle}
    </button>
  );
};

export default ButtonComponent;
