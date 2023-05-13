import React from "react";
import "./Buy.css";

import Card from "../../UI/Card";
import BuyItem from "./BuyItem";

const Buy = ({ products, removeFromCart, decreaseCount, increaseCount }) => {
  console.log(products);
  return (
    <Card className="buy-items">
      {products.map((product) => {
        return (
          <BuyItem
            key={Math.random() + product.id}
            product={product}
            removeFromCart={removeFromCart}
            decreaseCount={decreaseCount}
            increaseCount={increaseCount}
          />
        );
      })}
    </Card>
  );
};

export default Buy;
