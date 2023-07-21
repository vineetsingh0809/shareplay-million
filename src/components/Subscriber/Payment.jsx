import { block } from "million/react";
import React from "react";
import { useAppContext } from "../../AppContext";

const Payment = block(function Payment() {
  const { itemValue } = useAppContext();
  const { toggleStatus } = useAppContext();
  const { subscriberType } = useAppContext();

  const Value =
    subscriberType === "Subscriber"
      ? `${itemValue.normal}/${toggleStatus ? "month" : "year"}`
      : subscriberType === "Gold Subscriber"
      ? `${itemValue.gold}/${toggleStatus ? "month" : "year"}`
      : subscriberType === "Platinum Subscriber"
      ? `${itemValue.platinum}/${toggleStatus ? "month" : "year"}`
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
