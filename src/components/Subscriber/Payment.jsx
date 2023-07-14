import React from "react";
import { connect } from "react-redux";

const Payment = ({ h2Value }) => {
  return (
    <div>
      <h2 className="text-yellow-400 text-xl">{`${h2Value}/month`}</h2>
      <p className="text-white text-lg">
        Recurring payment. Cancel anytime. Creator my update perks at any time
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    h2Value: state.h2Value,
  };
};

export default connect(mapStateToProps)(Payment);
