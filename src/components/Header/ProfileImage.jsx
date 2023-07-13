import { block } from "million/react";
import React from "react";

const ProfileImage = block(function profileImage() {
  return (
    <div className="w-48 h-48 rounded-full absolute top-12 left-7 border-2 border-solid max-sm:w-32 max-sm:h-32">
      <img
        src="https://images.freeimages.com/images/large-previews/29f/military-patch-1452931.jpg"
        alt=""
        className="w-full h-full block object-cover rounded-full"
      />
    </div>
  );
});

export default ProfileImage;
