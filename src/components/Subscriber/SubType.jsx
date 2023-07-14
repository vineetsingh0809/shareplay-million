import React, { useState } from "react";
import { connect } from "react-redux";
import { updateH2Value } from "../../actions/actions";
import SubscriberType from "./SubscriberType";

const SubType = ({ dispatch }) => {
  const [subType, setSubType] = useState({
    NormalSubscriber: true,
    GoldSubscriber: false,
    PlatinumSubscriber: false,
  });

  const normalSubHandler = (event) => {
    const normal = document.querySelector("#normal");
    const item = normal.innerHTML;
    dispatch(updateH2Value(item));
    setSubType({
      NormalSubscriber: true,
      GoldSubscriber: false,
      PlatinumSubscriber: false,
    });
  };

  const goldSubHandler = (event) => {
    const gold = document.querySelector("#gold");
    const item = gold.innerHTML;
    dispatch(updateH2Value(item));
    setSubType({
      NormalSubscriber: false,
      GoldSubscriber: true,
      PlatinumSubscriber: false,
    });
  };

  const platinumSubHandler = (event) => {
    const platinum = document.querySelector("#platinum");
    const item = platinum.innerHTML;
    dispatch(updateH2Value(item));
    setSubType({
      NormalSubscriber: false,
      GoldSubscriber: false,
      PlatinumSubscriber: true,
    });
  };

  return (
    <div className="text-white py-5">
      <SubscriberType
        value={"$4.95"}
        SubscriberType={"Subscriber"}
        onClick={normalSubHandler}
        SubType={subType.NormalSubscriber}
        key={"1"}
        id={"normal"}
      />
      <SubscriberType
        value={"$9.95"}
        SubscriberType={"Subscriber"}
        onClick={goldSubHandler}
        SubType={subType.GoldSubscriber}
        key={"2"}
        id={"gold"}
      />
      <SubscriberType
        value={"$24.95"}
        SubscriberType={"Subscriber"}
        onClick={platinumSubHandler}
        SubType={subType.PlatinumSubscriber}
        key={"3"}
        id={"platinum"}
      />
    </div>
  );
};

export default connect()(SubType);
