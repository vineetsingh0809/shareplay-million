import { For, block } from "million/react";
import React, { useState } from "react";
import ImageBadgeComponent from "./ImageBadgeComponent";
import { badgesURL } from "../badgeData";
import CustomeEmotesNumberPara from "./CustomeEmotesNumberPara";

const SubscriberEmote = block(function SubscriberEmote() {
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div className="mt-5">
      <CustomeEmotesNumberPara />
      <div className="flex items-center justify-center flex-wrap max-w-md">
        <For each={badgesURL.monthlyBadge}>
          {(item) => (
            <ImageBadgeComponent
              imgSrc={hoveredId === item.id ? item.gif : item.url}
              imgAlt={item.url}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              className={"ml-5 mt-5 rounded-full w-12 h-12"}
            />
          )}
        </For>
      </div>
    </div>
  );
});

export default SubscriberEmote;
