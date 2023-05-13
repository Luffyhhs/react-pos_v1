import React from "react";
import Card from "./UI/Card";
import "./Header.css";

const Header = () => {
  return (
    <Card className="header">
      <div className="header_left">
        <h1 className="primary-heading">my pos</h1>
        <form action="">
          <input
            type="text"
            placeholder="Search For Item Name"
            className="input_search"
          />
          <button className="btn btn_search">Search</button>
        </form>
      </div>
      <button className="btn btn_new">New Items</button>
    </Card>
  );
};

export default Header;
