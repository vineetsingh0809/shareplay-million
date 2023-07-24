import React from "react";
import SubscribeButton from "../Button/SubscribeButton";
import SubscriberEmote from "../Badges and Emotes/SubscriberEmotes";
import Payment from "./Payment";
import SubscriberBadges from "../Badges and Emotes/SubscriberBadges";
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
