import React from "react";
import { useAppContext } from "../../Context-Provider/AppContext";

const HeaderMob = () => {
  const { hamburgerMenu, setHamburgerMenu } = useAppContext();

  const clickHandler = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <div className="sticky top-0 z-40 border-b bg-black">
      <div className="text-white flex items-center justify-center relative py-2">
        <h1 className="text-2xl">Channel Plays</h1>
        <div className="absolute right-2 text-2xl" onClick={clickHandler}>
          {!hamburgerMenu ? (
            <span>X</span>
          ) : (
            <img
              className="w-9 h-9 rounded-full"
              src="https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900164/108564673-hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.jpg"
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMob;
