import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user"></input>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <div>
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
