import React from "react";
import Card from "../../UI/Card";
import { FaTrashAlt } from "react-icons/fa";

const BuyItemActions = ({
  product,
  removeFromCart,
  increaseCount,
  decreaseCount,
}) => {
  const inputHandler = (e) => {
    const count = Number(e.target.value);
    count < 1 ? removeFromCart(product) : increaseCount(product, count);
  };

  return (
    <Card className="buy-item_actions">
      <input
        type="number"
        min="1"
        step="1"
        value={product.count}
        onChange={(e) => inputHandler(e)}
      />
      <button
        className="buy-more btn"
        onClick={() => increaseCount(product, product.count + 1)}
      >
        +
      </button>
      <button
        className="buy-less btn"
        onClick={() => decreaseCount(product, product.count - 1)}
      >
        -
      </button>
      <button
        className="bought-remove btn"
        onClick={() => removeFromCart(product)}
      >
        <FaTrashAlt />
      </button>
    </Card>
  );
};

export default BuyItemActions;
