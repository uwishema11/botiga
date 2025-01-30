import { Search, ShoppingCart, User, Heart } from "lucide-react";
import "./header.css";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-info">
        <h1 className="logo">Botiga</h1>
        <div className="category-container">
          <select className="category-select">
            <option value="All categories">All Categories</option>
            <option value="Uncategorized">Uncategorized</option>
            <option value="Body Lotion">Body Lotion</option>
            <option value="Shoes">Shoes</option>
            <option value="Electronics">Electronics</option>
            <option value="General">General</option>
            <option value="Women Clothes">Women Clothes</option>
            <option value="Fashion">Fashion</option>
            <option value="Watch">Watch</option>
          </select>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search products..." className="search-input" />
          <Search size={18} className="search-icon" />
        </div>
        <div className="icons">
          <User size={20} className="icon" />
          <ShoppingCart size={20} className="icon" />
          <Heart size={20} className="icon" />
        </div>
      </div>
    </header>
  );
}
