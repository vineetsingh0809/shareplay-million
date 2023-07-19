import React from "react";
import IndividualBadge from "./IndividualBadge";

const SubscriberBadges = () => {
  return (
    <div className="mt-8">
      <h1 className="text-white text-xl font-bold">Subscriber Badges</h1>
      <div className="flex space-x-7">
        <IndividualBadge
          imageUrl={
            "https://cdn.pixabay.com/photo/2018/04/11/11/54/small-poly-3310319_1280.jpg"
          }
          imageClassName={"ml-3 mt-4 rounded-full w-12 h-12"}
          timePeriod={"1 Month"}
          textClassName={"text-xl text-white mt-3"}
        />
        <IndividualBadge
          imageUrl={
            "https://cdn.pixabay.com/photo/2015/12/09/16/32/badge-1084984_1280.jpg"
          }
          imageClassName={"ml-3 mt-4 rounded-full w-12 h-12"}
          timePeriod={"3 Months"}
          textClassName={"text-xl text-white mt-3"}
        />
        <IndividualBadge
          imageUrl={
            "https://images.freeimages.com/images/large-previews/928/austin-healey-badge-1488054.jpg"
          }
          imageClassName={"ml-3 mt-4 rounded-full w-12 h-12"}
          timePeriod={"6 Months"}
          textClassName={"text-xl text-white mt-3"}
        />
      </div>
    </div>
  );
};

export default SubscriberBadges;
