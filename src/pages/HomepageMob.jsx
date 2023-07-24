import React from "react";
import HeaderMob from "../components/MobileComponents/HeaderMob";
import BodyMob from "../components/MobileComponents/BodyMob";
import PointButton from "../components/MobileComponents/PointButton";
import { useAppContext } from "../Context-Provider/AppContext";

const HomepageMob = () => {
  const { hamburgerMenu } = useAppContext();
  return (
    <div className="relative">
      <HeaderMob />
      {!hamburgerMenu ? (
        <>
          <BodyMob />
          <PointButton />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomepageMob;
