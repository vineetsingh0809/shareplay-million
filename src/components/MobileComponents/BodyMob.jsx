import React from "react";
import BadgeComponent from "./BadgeComponent";
// import { For } from "million/react";
import { ChatMessageData } from "./chatData";

const BodyMob = () => {
  return (
    <div className="py-4">
      {/* <For each={ChatMessageData}>
        {(item) => (
          <div className="my-5">
            <BadgeComponent
              mainImageStyle={"w-10 h-10"}
              OuterDivStyle={"w-11/12 m-auto text-white flex space-x-5"}
              mainImageUrl={item.mainImageUrl}
              InnerLeftDivStyle={item.InnerLeftDivStyle}
              InnerRightDivStyle={"space-y-2"}
              textMessage={item.textMessage}
              textMessageStyle={"text-lg"}
              underInnerDivStyle={"flex space-x-2"}
              smallImageUrl={item.smallImageUrl}
              smallImageStyle={"w-6 h-6"}
              amount={item.amount}
            />
          </div>
        )}
      </For> */}
      {ChatMessageData.map((item) => (
        <div key={item.id} className="my-5">
          <BadgeComponent
            mainImageStyle={"w-10 h-10"}
            OuterDivStyle={"w-11/12 m-auto text-white flex space-x-5"}
            mainImageUrl={item.mainImageUrl}
            InnerLeftDivStyle={item.InnerLeftDivStyle}
            InnerRightDivStyle={"space-y-2"}
            textMessage={item.textMessage}
            textMessageStyle={"text-lg"}
            underInnerDivStyle={"flex space-x-2"}
            smallImageUrl={item.smallImageUrl}
            smallImageStyle={"w-6 h-6"}
            amount={item.amount}
          />
        </div>
      ))}
    </div>
  );
};

export default BodyMob;
