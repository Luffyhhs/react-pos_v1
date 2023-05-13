import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/main/Main";
const items = [
  {
    id: 1,
    name: "54mm Gradient Polarized Rectangular Sunglasses",
    category: "clothing",
    image: "./img/sunglass-1.jpg",
    price: 145,
  },
  {
    id: 2,
    category: "Clothing",
    name: "Cloudflow Running Shoe (Men)",
    image: "./img/cloudflow_shoe.jpg",
    price: 139.99,
  },
  {
    id: 3,
    category: "Clothing",
    name: "Zero Water Resistant Running Pullover",
    image: "./img/raincoat-1.jpg",
    price: 159.99,
  },
  {
    id: 4,
    category: "Clothing",
    name: "Baby Bear Hooded Fleece Jacket",
    image: "./img/bear-hooded-jacket.jpg",
    price: 49.99,
  },
  {
    id: 5,
    name: "Raffia Hobo Bag",
    category: "Clothing",
    image: "./img/hobo-bag.jpg",
    price: 1890.99,
  },

  {
    id: 6,
    name: "Mohinga",
    image: "./img/mohinga.jpg",
    category: "Food",
    price: 3,
  },

  {
    id: 7,
    name: "Rendang",
    image: "./img/rendang.jpg",
    category: "Food",
    price: 25,
  },

  {
    id: 8,
    name: "Ramen",
    image: "./img/shoyu-ramen.jpg",
    price: 20,
    category: "Food",
  },

  {
    id: 9,
    name: "Lasagna",
    image: "./img/lasagna.jpg",
    category: "Food",
    price: 10,
  },

  {
    id: 10,
    name: "Kimchi",
    category: "Food",
    image: "./img/kimchi.jpg",
    price: 3,
  },

  {
    id: 11,
    name: "Hamburger",
    image: "/img/hamburger.jpg",
    category: "Food",
    price: 5,
  },

  {
    id: 12,
    name: "Paella Valenciana",
    category: "Food",
    image: "./img/Paella-Valenciana.jpg",
    price: 29.99,
  },

  {
    id: 13,
    name: "Pizza",
    category: "Food",
    image: "./img/pizza.jpg",
    price: 19.99,
  },

  {
    id: 14,
    name: "Scottish Scones",
    category: "Food",
    image: "./img/Scottish-Scones.jpg",
    price: 4.99,
  },

  {
    id: 15,
    name: "Chicken Tikka Masala",
    category: "Food",
    image: "./img/chicken-tikka-masala.jpg",
    price: 24.99,
  },

  {
    id: 16,
    name: "Waterproof Backpack Laptop Bag ",
    category: "ConsumerGoods",
    image: "./img/laptop-backpack.jpg",
    price: 99.99,
  },

  {
    id: 17,
    name: "Google Pixel 7 Pro",
    category: "ConsumerGoods",
    image: "./img/pixel-7pro.jpg",
    price: 799,
  },

  {
    id: 18,
    name: "Nothing Phone 1",
    category: "ConsumerGoods",
    image: "./img/nothing-1.jpg",
    price: 408.99,
  },

  {
    id: 19,
    name: "Motorola Edge 30 Pro",
    category: "ConsumerGoods",
    image: "./img/motorola-edge-30pro.jpg",
    price: 799.99,
  },

  {
    id: 20,
    name: "HP Spectre x360 ",
    category: "ConsumerGoods",
    image: "./img/hp-spectre.jpg",
    price: 1250,
  },

  {
    id: 21,
    name: "OptiPlex 7400 All-in-One",
    category: "ConsumerGoods",
    image: "./img/optiPlex-7400.jpg",
    price: 1722,
  },

  {
    id: 22,
    name: "Buggy Influencer Air",
    category: "BabyAccessories",
    image: "./img/buggy-air.jpg",
    price: 99.99,
  },

  {
    id: 23,
    name: "Scooter Highwaykick",
    category: "BabyAccessories",
    image: "./img/scooter.jpg",
    price: 99.99,
  },

  {
    id: 24,
    name: "Rocking Chair for Children",
    category: "BabyAccessories",
    image: "./img/rocking-chair.jpg",
    price: 150,
  },

  {
    id: 25,
    name: "Backpack Water Gun Owl Backpack",
    category: "BabyAccessories",
    image: "./img/backpack-water-gun.jpg",
    price: 12,
  },

  {
    id: 26,
    name: "Water Gun For Children",
    category: "BabyAccessories",
    image: "./img/water-gun.jpg",
    price: 10,
  },

  {
    id: 27,
    name: "Men Slim Fit Casual Shirt",
    category: "Clothing",
    image: "./img/men-slim-fit.jpg",
    price: 5,
  },

  {
    id: 28,
    name: "Printed Floral Midi Dress",
    category: "Clothing",
    image: "./img/floral-dress.jpg",
    price: 10,
  },

  {
    id: 29,
    name: "Montra Downtown 2022",
    category: "ConsumerGoods",
    image: "./img/montra-downtown.png",
    price: 500,
  },

  {
    id: 30,
    name: "Cotton Sleep and Play",
    category: "BabyAccessories",
    image: "./img/cotton-pajamas.jpg",
    price: 12.99,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Main items={items} />
    </div>
  );
}

export default App;
