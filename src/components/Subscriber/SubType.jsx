import React, { useState } from "react";
import { connect } from "react-redux";
import { updateH2Value } from "../../actions/actions";

const SubType = ({ dispatch }) => {
  const [normalSub, setNormalSub] = useState({
    flag: true,
    value: null,
  });
  const [goldSub, setGoldSub] = useState({
    flag: false,
    value: null,
  });
  const [platSub, setPlatSub] = useState({
    flag: false,
    value: null,
  });

  const normalSubHandler = (event) => {
    const normal = document.querySelector("#normal");
    const item = normal.innerHTML;
    dispatch(updateH2Value(item));
    setNormalSub({
      flag: true,
      value: normal.innerHTML,
    });
    setGoldSub({
      flag: false,
      value: null,
    });
    setPlatSub({
      flag: false,
      value: null,
    });
  };

  const goldSubHandler = (event) => {
    const gold = document.querySelector("#gold");
    const item = gold.innerHTML;
    dispatch(updateH2Value(item));
    setNormalSub({
      flag: false,
      value: null,
    });
    setGoldSub({
      flag: true,
      value: gold.innerHTML,
    });
    setPlatSub({
      flag: false,
      value: null,
    });
  };

  const platinumSubHandler = (event) => {
    const platinum = document.querySelector("#platinum");
    const item = platinum.innerHTML;
    dispatch(updateH2Value(item));
    setNormalSub({
      flag: false,
      value: null,
    });
    setGoldSub({
      flag: false,
      value: null,
    });
    setPlatSub({
      flag: true,
      value: platinum.innerHTML,
    });
  };

  return (
    <div className="text-white py-5">
      <div
        className={`py-4 text-xl font-medium pl-7 ${
          normalSub.flag ? "bg-[#222222]" : ""
        }`}
        onClick={normalSubHandler}
      >
        <p className="cursor-pointer">Subscriber</p>
        <p id="normal" className="cursor-pointer">
          $4.95
        </p>
      </div>
      <div
        className={`py-4 text-xl font-medium pl-7 ${
          goldSub.flag ? "bg-[#222222]" : ""
        }`}
        onClick={goldSubHandler}
      >
        <p className="cursor-pointer">Gold Subscriber</p>
        <p id="gold" className="cursor-pointer">
          $9.95
        </p>
      </div>
      <div
        className={`py-4 text-xl font-medium pl-7 ${
          platSub.flag ? "bg-[#222222]" : ""
        }`}
        onClick={platinumSubHandler}
      >
        <p className="cursor-pointer">Platinum Subscriber</p>
        <p id="platinum" className="cursor-pointer">
          $24.95
        </p>
      </div>
    </div>
  );
};

export default connect()(SubType);
