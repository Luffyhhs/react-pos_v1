import React from "react";
import Card from "../../UI/Card";

const BuyItemDetail = ({ product }) => {
  return (
    <Card className="buy-item_detail">
      <h2 className="buy-item_name">{product.name}</h2>
      <span>-</span>
      <p className="buy-item_price">{product.price}</p>
    </Card>
  );
};

export default BuyItemDetail;
