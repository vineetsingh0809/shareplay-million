import { block } from "million/react";
import React from "react";

const SubscriberType = block(function SubscriberType({
  value,
  onClick,
  SubType,
  SubscriberType,
  valueId,
  typeId,
  divClassName,
  divClassNameIfTrue,
  divClassNameIfFalse,
  pClassName
}) {
  return (
    <div
      className={`${divClassName} ${
        SubType ? divClassNameIfTrue : divClassNameIfFalse
      }`}
      onClick={onClick}
    >
      <p id={typeId} className={pClassName}>{SubscriberType}</p>
      <p id={valueId} className={pClassName}>
        {value}
      </p>
    </div>
  );
});

export default SubscriberType;
