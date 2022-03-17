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
    category: "earbuds",
    rating: 3.4,
    price: 9990.0,
  },
  {
    _id: uuid(),
    name: "OnePlus 9R",
    img: "https://eaglestore.netlify.app/images/card-image2.avif",
    category: "phone",
    rating: 4.3,
    price: 49000,
  },
  {
    _id: uuid(),
    name: "Asus Zenbook",
    img: "https://eaglestore.netlify.app/images/card-image1.avif",
    category: "laptop",
    rating: 2.8,
    price: 114990.0
  },
  {
    _id: uuid(),
    name: "realme 9 5G",
    img: "https://res.cloudinary.com/anujk/image/upload/v1647461325/mxw_1440_f_auto_ef0xk4.png",
    category: "phone",
    rating: 4.4,
    price: 15000.0
  },
  {
    _id: uuid(),
    name: "Lenovo IdeaPad 3",
    img: "https://res.cloudinary.com/anujk/image/upload/v1647462517/mxw_1440_f_auto_autgv3.png",
    category: "laptop",
    rating: 3.8,
    price: 35990.0
  },
  {
    _id: uuid(),
    name: "Dell Inspiron 13",
    img: "https://res.cloudinary.com/anujk/image/upload/v1647462701/mxw_1440_f_auto_dqk7oi.png",
    category: "laptop",
    rating: 4.8,
    price: 88990.0
  },
  {
    _id: uuid(),
    name: "HP Pavilion Gaming 15",
    img: "https://res.cloudinary.com/anujk/image/upload/v1647462881/mxw_1440_f_auto_i5zxzm.png",
    category: "laptop",
    rating: 4.3,
    price: 62594.0
  },
  {
    _id: uuid(),
    name: "Realme Buds Q2",
    img: "https://res.cloudinary.com/anujk/image/upload/v1647463030/mxw_1440_f_auto_eqaaqe.png",
    category: "earbuds",
    rating: 4.3,
    price: 1349.0
  },
  {
    _id: uuid(),
    name: "boAt Airdopes",
    img: "https://res.cloudinary.com/anujk/image/upload/v1647463003/mxw_1440_f_auto_xaezsd.png",
    category: "earbuds",
    rating: 4.9,
    price: 1799.0
  },
  {
    _id: uuid(),
    name: "Sony In-Ear",
    img: "https://res.cloudinary.com/anujk/image/upload/v1647462976/mxw_1440_f_auto_t86qct.png",
    category: "earbuds",
    rating: 3.2,
    price: 7249.0
  },
  {
    _id: uuid(),
    name: "Noise Buds",
    img: "https://res.cloudinary.com/anujk/image/upload/v1647462966/mxw_1440_f_auto_aggrbb.png",
    category: "earbuds",
    rating: 4.6,
    price: 1299.0
  },
];
