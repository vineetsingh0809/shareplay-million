import { block } from "million/react";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../Context-Provider/AppContext";
import { toggleData } from "../../Data/toggleData";

const Payment = block(function Payment() {
  const [duration, setDuration] = useState("");
  const { itemValue } = useAppContext();
  const { toggleStatus } = useAppContext();
  const { subscriberType } = useAppContext();

  useEffect(() => {
    const matchedData = toggleData.find((item) => item.data === toggleStatus);
    if (matchedData) {
      setDuration(matchedData.duration);
    }
  }, [toggleStatus]);

  const Value =
    subscriberType === "Subscriber"
      ? `${itemValue.normal}/${duration}`
      : subscriberType === "Gold Subscriber"
      ? `${itemValue.gold}/${duration}`
      : subscriberType === "Platinum Subscriber"
      ? `${itemValue.platinum}/${duration}`
      : "";

  return (
    <div>
      <h2 className="text-yellow-400 text-xl">{Value}</h2>
      <p className="text-white text-lg">
        Recurring payment. Cancel anytime. Creator my update perks at any time
      </p>
    </div>
  );
});

export default Payment;
