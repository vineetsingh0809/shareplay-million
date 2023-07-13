import React from "react";
import "./Header.css";
import TopHeader from "./TopHeader";
import Banner from "./Banner";

const Header = (props) => {
  const handleHeader = (data) => {
    props.onHome(data);
  };

  return (
    <>
      <TopHeader />
      <Banner onHeader={handleHeader} />
    </>
  );
};

export default Header;
