import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

const SubscribeButton = () => {
  const [subscribed, setSubscribe] = useState(false);
  const [popUp, setPopup] = useState("");

  const buttonClickedHandler = () => {
    const btn = document.getElementById("SubBtn");
    setSubscribe(!subscribed);
    if (!subscribed) {
      btn.disabled = true;
      btn.style.cursor = "not-allowed";
      setPopup("You will be now notified for the new updates on this channel");
      setTimeout(() => {
        setPopup("");
        btn.disabled = false;
        btn.style.cursor = "pointer";
      }, 3000);
    } else {
      setPopup("");
    }
  };

  const PopupStyle = { color: "white", paddingTop: "10px" };

  return (
    <div className="mt-3">
      <ButtonComponent
        btnTitle={`${!subscribed ? "✨ Subscribe" : "Subscribed 🔔"}`}
        onClick={buttonClickedHandler}
        className={`text-white text-xl px-10 py-3 rounded-full border-none outline-none ${
          !subscribed ? "bg-red-500" : "bg-[#333333]"
        }`}
        id={"SubBtn"}
      />
      <p style={PopupStyle}>{popUp}</p>
    </div>
  );
};

export default SubscribeButton;
