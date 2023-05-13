import React from "react";
import Buy from "./Buy";
import Total from "./Total";
import Card from "../../UI/Card";

const BuyAndTotal = ({
  products,
  removeFromCart,
  increaseCount,
  decreaseCount,
}) => {
  return (
    <Card>
      <Buy
        products={products}
        decreaseCount={decreaseCount}
        increaseCount={increaseCount}
        removeFromCart={removeFromCart}
      />
      <Total products={products} />
    </Card>
  );
};

export default BuyAndTotal;
