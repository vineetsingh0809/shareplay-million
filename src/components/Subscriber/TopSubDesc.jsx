import React from "react";
import { connect } from "react-redux";
import SubscribeButton from "./SubscribeButton";
import SubscriberBadge from "./SubscriberBadge";

const TopSubDesc = ({ h2Value }) => {
  return (
    <>
      <h2 className="text-yellow-400 text-xl">{`${h2Value}/month`}</h2>
      <p className="text-white text-lg">
        Recurring payment. Cancel anytime. Creator my update perks at any time
      </p>
      <SubscribeButton />
      <SubscriberBadge />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    h2Value: state.h2Value,
  };
};

export default connect(mapStateToProps)(TopSubDesc);
