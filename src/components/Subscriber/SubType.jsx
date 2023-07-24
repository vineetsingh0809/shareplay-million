import React, { useState } from "react";
import SubscriberType from "./SubscriberType";
import { useAppContext } from "../../Context-Provider/AppContext";

const SubType = () => {
  const { itemValue, setItemValue } = useAppContext();

  const [subType, setSubType] = useState({
    NormalSubscriber: true,
    GoldSubscriber: false,
    PlatinumSubscriber: false,
  });

  const { setSubscriberType } = useAppContext();

  const normalSubHandler = () => {
    const normal = document.querySelector("#normal");
    const normalSub = document.querySelector("#type-normal");
    setSubscriberType(normalSub.innerHTML);
    setItemValue({
      ...itemValue,
      normal: normal.innerHTML,
    });
    setSubType({
      NormalSubscriber: true,
      GoldSubscriber: false,
      PlatinumSubscriber: false,
    });
  };

  const goldSubHandler = () => {
    const gold = document.querySelector("#gold");
    const goldenSub = document.querySelector("#type-gold");
    setSubscriberType(goldenSub.innerHTML);
    setItemValue({
      ...itemValue,
      gold: gold.innerHTML,
    });
    setSubType({
      NormalSubscriber: false,
      GoldSubscriber: true,
      PlatinumSubscriber: false,
    });
  };

  const platinumSubHandler = (event) => {
    const platinum = document.querySelector("#platinum");
    const platinumSub = document.querySelector("#type-platinum");
    setSubscriberType(platinumSub.innerHTML);
    setItemValue({
      ...itemValue,
      platinum: platinum.innerHTML,
    });
    setSubType({
      NormalSubscriber: false,
      GoldSubscriber: false,
      PlatinumSubscriber: true,
    });
  };

  return (
    <div className="text-white py-5">
      <SubscriberType
        value={itemValue.normal}
        SubscriberType={"Subscriber"}
        onClick={normalSubHandler}
        SubType={subType.NormalSubscriber}
        key={"1"}
        valueId={"normal"}
        typeId={"type-normal"}
        divClassName={"py-4 text-xl font-medium pl-7"}
        divClassNameIfTrue={"bg-[#222222]"}
        divClassNameIfFalse={""}
        pClassName={"cursor-pointer"}
      />
      <SubscriberType
        value={itemValue.gold}
        SubscriberType={"Gold Subscriber"}
        onClick={goldSubHandler}
        SubType={subType.GoldSubscriber}
        key={"2"}
        valueId={"gold"}
        typeId={"type-gold"}
        divClassName={"py-4 text-xl font-medium pl-7"}
        divClassNameIfTrue={"bg-[#222222]"}
        divClassNameIfFalse={""}
        pClassName={"cursor-pointer"}
      />
      <SubscriberType
        value={itemValue.platinum}
        SubscriberType={"Platinum Subscriber"}
        onClick={platinumSubHandler}
        SubType={subType.PlatinumSubscriber}
        key={"3"}
        valueId={"platinum"}
        typeId={"type-platinum"}
        divClassName={"py-4 text-xl font-medium pl-7"}
        divClassNameIfTrue={"bg-[#222222]"}
        divClassNameIfFalse={""}
        pClassName={"cursor-pointer"}
      />
    </div>
  );
};

export default SubType;
