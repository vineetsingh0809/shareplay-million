import React from "react";

const BadgeComponent = ({
  mainImageUrl,
  mainImageStyle,
  OuterDivStyle,
  InnerLeftDivStyle,
  InnerRightDivStyle,
  textMessage,
  textMessageStyle,
  smallImageUrl,
  underInnerDivStyle,
  smallImageStyle,
  amount,
}) => {
  return (
    <div className={OuterDivStyle}>
      <div className={InnerLeftDivStyle}>
        <img src={mainImageUrl} alt="" className={mainImageStyle} />
      </div>
      <div className={InnerRightDivStyle}>
        <h1 className={textMessageStyle}>{textMessage}</h1>
        <div className={underInnerDivStyle}>
          <img src={smallImageUrl} alt="" className={smallImageStyle} />
          <p>{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default BadgeComponent;
