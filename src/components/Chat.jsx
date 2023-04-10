import React from "react";
import three from "../images/three.png";
import plus from "../images/plus.png";
import camera from "../images/camera.png";
import Messages from "./Messages";
import Input from "./Input";
import { getStorage, ref } from "firebase/storage";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={three} alt="" />
          <img src={plus} alt="" />
          <img src={camera} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
export const storage = getStorage();
