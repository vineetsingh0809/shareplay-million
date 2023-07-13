import React, { useState } from "react";
import Header from "./Header/Header";
import Subscribers from "./Subscriber/Subscribers";

const HomePage = () => {
  const [type, setType] = useState("Monthly");

  const homepageHandler = (data) => {
    setType(data);
  };

  return (
    <div className="ml-6">
      <Header onHome={homepageHandler} />
      {type === "Monthly" ? (
        <Subscribers />
      ) : (
        <h1 className="mt-10 text-3xl">Nothing to display in year</h1>
      )}
    </div>
  );
};

export default HomePage;
