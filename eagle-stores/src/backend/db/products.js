import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "MacBook Pro",
    img: "https://eaglestore.netlify.app/images/card-image3.png",
    category: "laptop",
    rating: 4.9,
    price: 199999,
  },
  {
    _id: uuid(),
    name: "OnePlus Earbuds",
    img: "https://eaglestore.netlify.app/images/card-image5.avif",
    category: "earphones",
    rating: 3.4,
    price: 9990.0,
  },
  {
    _id: uuid(),
    name: "OnePlus 9R",
    img: "https://eaglestore.netlify.app/images/card-image2.avif",
    category: "mobile",
    rating: 4.3,
    price: 49000,
  },
  {
    id: uuid(),
    name: "Asus Zenbook",
    img: "https://eaglestore.netlify.app/images/card-image1.avif",
    category: "laptop",
    rating: 2.8,
    price: 114990.0
  }
];
