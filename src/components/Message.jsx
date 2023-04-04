import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        ></img>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Message;
