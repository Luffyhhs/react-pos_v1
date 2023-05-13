import React from "react";
import "./Total.css";

const Total = ({ products }) => {
  const getTotal = () => {
    return products.reduce(
      (accr, product) => accr + product.price * product.count,
      0
    );
  };
  return (
    <div className="total-box">
      <div className="total">
        <p>Total Amount -</p>
        <p>$ {getTotal().toFixed(2)}</p>
      </div>
      <button type="submit" className="btn btn_buy">
        Buy
      </button>
    </div>
  );
};

export default Total;
