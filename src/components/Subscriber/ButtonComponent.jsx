import { block } from "million/react";
import React from "react";

const ButtonComponent = block(function ButtonComponentSec({
  btnTitle,
  onClick,
  className,
  id,
}) {
  return (
    <button onClick={onClick} className={className} id={id}>
      {btnTitle}
    </button>
  );
});

export default ButtonComponent;
