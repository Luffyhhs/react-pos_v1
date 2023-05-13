import React from "react";
import "./Products.css";
import Product from "./Product";
import Card from "../../UI/Card";

const Products = ({ items, productAdd }) => {
  const onAddToCart = (addData) => {
    const saveAddData = {
      ...addData,
    };
    productAdd(saveAddData);
  };
  return (
    <Card className="list-items">
      {items.map((item) => {
        return (
          <Product
            key={Math.random() + item.id}
            name={item.name}
            price={item.price}
            id={item.id}
            onAddToCart={onAddToCart}
          />
        );
      })}
    </Card>
  );
};

export default Products;
