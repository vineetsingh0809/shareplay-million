import React from "react";
import SubscribeButton from "./SubscribeButton";
import SubscriberEmote from "./SubscriberEmotes";
import Payment from "./Payment";
import SubscriberBadges from "./SubscriberBadges";
import SharePlayBoosts from "./SharePlayBoosts";

const TopSubDesc = () => {
  return (
    <div>
      <Payment />
      <SubscribeButton />
      <SubscriberEmote />
      <SubscriberBadges />
      <SharePlayBoosts />
    </div>
  );
};

export default TopSubDesc;
