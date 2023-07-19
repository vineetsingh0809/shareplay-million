import { block } from "million/react";
import React from "react";

const SubscriberType = block(function SubscriberType({
  value,
  onClick,
  SubType,
  SubscriberType,
  id,
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
      <p className={pClassName}>{SubscriberType}</p>
      <p id={id} className={pClassName}>
        {value}
      </p>
    </div>
  );
});

export default SubscriberType;
