import React, { useState } from "react";

const SubscribeButton = () => {
  const [subscribed, setSubscribe] = useState(false);
  const [popUp, setPopup] = useState("");

  const buttonClickedHandler = () => {
    setSubscribe(!subscribed);
    if (!subscribed) {
      setPopup("You will be now notified for the new updates on this channel");
      setTimeout(() => {
        setPopup("");
      }, 3000);
    } else {
      setPopup("");
    }
  };

  const PopupStyle = { color: "white", paddingTop: "10px" };

  return (
    <div className="mt-3">
      <button
        onClick={buttonClickedHandler}
        className={`text-white px-10 py-3 rounded-full border-none outline-none ${
          !subscribed ? "bg-red-500" : "bg-[#333333]"
        }`}
      >
        {!subscribed ? "✨ Subscribe" : "Subscribed 🔔"}
      </button>
      <p style={PopupStyle}>{popUp}</p>
    </div>
  );
};

export default SubscribeButton;
