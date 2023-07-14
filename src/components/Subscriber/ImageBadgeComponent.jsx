import React from "react";

const ImageBadgeComponent = ({
  imgSrc,
  imgAlt,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default ImageBadgeComponent;
