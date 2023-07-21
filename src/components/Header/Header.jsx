import React from "react";
import "./Header.css";
import TopHeader from "./TopHeader";
import Banner from "./Banner";
import { block } from "million/react";

const Header = () => {
  return (
    <div>
      <TopHeader />
      <Banner />
    </div>
  );
};

export default Header;
