import React, { useState } from "react";
import BuyAndTotal from "./BuyandTotal/BuyAndTotal.js";
import Products from "./Products/Products";
import "./Main.css";
import Card from "../UI/Card";

const Main = ({ items, saveCartProducts }) => {
  const [products, setProducts] = useState([]);

  const productAdd = (saveProduct) => {
    saveCartProducts(saveProduct);
    const productInCart = products.find(
      (product) => product.id === saveProduct.id
    );
    if (productInCart) {
      setProducts(
        products.map((product) =>
          product.id === saveProduct.id
            ? { ...product, count: product.count + 1 }
            : product
        )
      );
    } else {
      setProducts([...products, { ...saveProduct, count: 1 }]);
    }
  };
  const removeFromCart = (productData) => {
    const updateCart = products.map((product) =>
      product.id === productData.id
        ? { ...product, count: product.count - 1 }
        : product
    );
    setProducts(updateCart.filter((product) => product.count > 0));
  };

  const increaseCount = (productData, count) => {
    setProducts(
      products.map((product) =>
        product.id === productData.id ? { ...product, count } : product
      )
    );
  };

  const decreaseCount = (productData, count) => {
    count < 1
      ? removeFromCart(productData)
      : setProducts(
          products.map((product) =>
            product.id === productData.id ? { ...product, count } : product
          )
        );
  };
  //   const totalProductCount = () => {
  //     return products.reduce((accr, product) => accr + product.count, 0);
  //   };

  return (
    <Card className="main-section">
      <Products items={items} productAdd={productAdd} />
      <BuyAndTotal
        products={products}
        removeFromCart={removeFromCart}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </Card>
  );
};

export default Main;
