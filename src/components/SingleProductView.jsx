import { useParams } from "react-router-dom";
import { NewArrivals } from "../helpers/ProductsList";
import "./SingleProductView.css";
import { useState } from "react";

export default function SingleProductView() {
  const { id } = useParams();
  const card = NewArrivals.find((product) => product.id === parseInt(id));

  const [cartMessage, setCartMessage] = useState("");

  const handleAddToCart = () => {
    setCartMessage("Product added to cart! 🛒");
    setTimeout(() => setCartMessage(""), 3000);
  };

  if (!card) return <h2 className="no-product">No Product Found</h2>;

  return (
    <div className="product-container">
      <img src={card.image} alt="Product" className="product-image" />
      <div className="product-info">
        <h1 className="product-name">{card.name}</h1>
        <p className="product-price">${card.price}</p>
        <p className="product-rating">⭐ {card.rating} / 5</p>
        <p className="product-category">
          <strong>Category:</strong> {card.category}
        </p>
        <p className="product-description">{card.description}</p>
        <p
          className={`product-stock ${
            card.inStock ? "in-stock" : "out-of-stock"
          }`}
        >
          {card.inStock ? "In Stock" : "Out of Stock"}
        </p>

        <button
          className="add-to-cart"
          onClick={handleAddToCart}
          disabled={!card.inStock}
        >
          {card.inStock ? "Add to Cart" : "Out of Stock"}
        </button>

        {cartMessage && <p className="cart-message">{cartMessage}</p>}
      </div>
    </div>
  );
}
