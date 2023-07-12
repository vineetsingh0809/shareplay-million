import { For, block } from "million/react";
import React from "react";

const ProfileImage = block(function profileImage() {
  return (
    <div className="w-48 h-48 rounded-full absolute top-12 left-7 border-2 border-solid">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        alt=""
        className="w-full h-full block object-cover rounded-full"
      />
      <ul>
        <For each={[1, 2, 3, 4, 5]}>{(item) => <li>{item}</li>}</For>
      </ul>
    </div>
  );
});

export default ProfileImage;
