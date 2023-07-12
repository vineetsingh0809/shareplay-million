import React from "react";
import SubscribeButton from "./SubscribeButton";
import SubscriberBadge from "./SubscriberBadge";

const TopSubDesc = () => {
  return (
    <>
      <h2 className="text-yellow-400 text-xl">$4.95/month</h2>
      <p className="text-white text-lg">
        Recurring payment. Cancel anytime. Creator my update perks at any time
      </p>
      <SubscribeButton />
      <SubscriberBadge/>
    </>
  );
};

export default TopSubDesc;
