import { Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPage from "./Login";
import "./header.css";

export default function NavBar() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  return (
    <>
      <div className="navBar-info">
        <div className="trending categories">
          <div>Trending Categories</div>
          <div className="trending-dropdown">
            <Link to="/">Home</Link>
            <a href="#">Shoes</a>
            <a href="#">Women Clothes</a>
            <a href="#">Fashion</a>
            <a href="#">Watch</a>s
          </div>
        </div>
        <div className="link-contacts">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/vendors">Vendors</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <button
                className="login-btn"
                onClick={() => setIsLoginVisible(true)}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
        <div className="contact">
          <Phone size={16} className="phone-icon" />
          <span>800-123-4567</span>
        </div>
      </div>
      {isLoginVisible && <LoginPage onClose={() => setIsLoginVisible(false)} />}
    </>
  );
}
