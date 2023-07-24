import React from "react";

const IndividualBadge = ({
  imageUrl,
  imageClassName,
  textClassName,
  timePeriod,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={imageUrl} className={imageClassName} />
      <h3 className={textClassName}>{timePeriod}</h3>
    </div>
  );
};

export default IndividualBadge;
