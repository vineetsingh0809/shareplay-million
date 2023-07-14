import React from "react";
import SubscribeButton from "./SubscribeButton";
import SubscriberBadge from "./SubscriberBadge";
import Payment from "./Payment";

const TopSubDesc = () => {
  return (
    <div>
      <Payment />
      <SubscribeButton />
      <SubscriberBadge />
    </div>
  );
};

export default TopSubDesc;
