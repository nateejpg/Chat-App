import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Talk Now</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <span>Jhon</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
