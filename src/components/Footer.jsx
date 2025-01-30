import "./footer.css";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <h1>Stay up to Date</h1>
          <p>
            Subscribe to our newsletter and get 20% discount offer on your first
            order.
          </p>
          <div>
            <input type="email" placeholder="Enter your email" />
            <span>SUBMIT</span>
          </div>

          <div className="footer-links">
            <div>
              <h3>SHOP</h3>
              <a href="#">Body Lotion</a>
              <a href="#">Computer Gadgets</a>
              <a href="#">Electronics</a>
              <a href="#">Fashion</a>
              <a href="#">General</a>
              <a href="#">Shoes</a>
            </div>
            <div>
              <h3>COMPANY</h3>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Help</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <h3>ABOUT</h3>
              <a href="#">Who We Are</a>
              <a href="#">Reviews</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>

        <div className="contacts">
          <h2>Happy to help</h2>
          <div className="contacts-details">
            <p>1279 Thorn Street, NY</p>
            <p>Phone: 307-549-2480</p>
            <p>Mail: demo@gmail.com</p>
          </div>
          <div className="socials">
            <Facebook size={20} />
            <Twitter size={20} />
            <Linkedin size={20} />
            <Instagram size={20} />
          </div>

          <div className="acceptors">
            <img src="/footer-apple-payment.png" alt="Google Pay" />
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/MasterCard_Logo.svg"
              alt="Mastercard"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Apple_Pay_logo.svg"
              alt="Apple Pay"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
            /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
