import { useState } from "react";
import { Star } from "lucide-react";
import "../styles/ProductListing.css";

const categories = [
  "Body Lotion",
  "Computer Gadget",
  "Electronics",
  "Fashion",
  "General",
  "Shoes",
  "Sports",
  "Watch",
  "Woman Clothes",
];

const colors = ["#a8a59d", "#8b5e3b", "#e7e4df", "#ffffff"];

const products = [
  {
    name: "All In One Bottle",
    price: "$22.00 - $55.00",
    rating: 3,
    img: "/product-shoe.jpg",
  },
  {
    name: "Amazon Alexa",
    price: "$49.00 - $69.00",
    rating: 5,
    img: "/product-water-bottle.jpg",
  },
  {
    name: "Headset Gamer Legion",
    price: "$22.00 - $55.00",
    rating: 4,
    img: "/product-shoes.jpg",
  },
  {
    name: "Headset Gamer Legion",
    price: "$22.00 - $55.00",
    rating: 4,
    img: "/product-shoes.jpg",
  },
  {
    name: "Headset Gamer Legion",
    price: "$22.00 - $55.00",
    rating: 4,
    img: "/product-shoes.jpg",
  },
  {
    name: "Headset Gamer Legion",
    price: "$22.00 - $55.00",
    rating: 4,
    img: "/product-shoes.jpg",
  },
];

export default function ShopView() {
  const [sort, setSort] = useState("default");

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Categories</h2>
        <ul>
          {categories.map((cat, index) => (
            <li key={index}>{cat}</li>
          ))}
        </ul>
        <h2>Color</h2>
        <div className="colors">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-circle"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </aside>
      <main className="product-grid">
        <div>
          <h2 className="shopText">Shop</h2>
          <img src="/shop-page.png" alt="Shop Page" className="shopImage" />
        </div>
        <div className="top-bar">
          <p>Showing 1-9 of 13 results</p>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Default sorting</option>
            <option value="price">Price: Low to High</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
        <div className="grid">
          {products.map((product, index) => (
            <div className="card" key={index}>
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < product.rating ? "filled" : "empty"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
