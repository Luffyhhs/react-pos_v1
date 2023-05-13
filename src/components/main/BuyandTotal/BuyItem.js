import React from "react";
import Card from "../../UI/Card";
import BuyItemDetail from "./BuyItemDetail";
import BuyItemActions from "./BuyItemActions";

const BuyItem = (props) => {
  return (
    <Card className="buy-item">
      <BuyItemDetail product={props.product} />
      <BuyItemActions
        product={props.product}
        removeFromCart={props.removeFromCart}
        increaseCount={props.increaseCount}
        decreaseCount={props.decreaseCount}
      />
    </Card>
  );
};

export default BuyItem;
