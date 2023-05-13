import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import Card from "../../UI/Card";

const Product = (props) => {
  const name =
    props.name.length > 10 ? props.name.substring(0, 10) + "...." : props.name;
  const price = props.price;
  const id = props.id;
  const addToCart = () => {
    const product = {
      name,
      price,
      id,
    };
    props.onAddToCart(product);
  };
  return (
    <Card className="list-item">
      <div className="list-item_detail">
        <h2 className="list-item_name">{name}</h2>
        <span>-</span>
        <p className="list-item_price">{price}</p>
      </div>
      <button className="btn btn_cart" onClick={() => addToCart()}>
        <GiShoppingCart />
      </button>
    </Card>
  );
};

export default Product;
