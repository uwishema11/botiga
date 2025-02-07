import CategoriesCard from "../components/PopularCategories";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { VendorsList } from "../helpers/VendorsList";
import { NewArrivals, popularCategories } from "../helpers/ProductsList";
import VendorsCard from "../components/VendorsCard";
import "./../styles/HomeView.css";

export default function HomeView() {
  const navigation = useNavigate();
  const handleNavigate = (id) => {
    navigation(`/singleVendor/${id}`);
  };

  const handleSingleProductNavigate = (id) => {
    navigation(`/singleCard/${id}`);
  };

  return (
    <div className="home-contentents-container">
      <div className="contents">
        <div className="categories">
          <ul>
            <li>Electronics</li>
            <li>Computer Gadget</li>
            <li>Fashion</li>
            <li>Body Lotion</li>
            <li>Sports</li>
            <li>Women Clothes</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
          <div className="home-content-heading">
            <p>Explore our latest and greatest electronics</p>
            <button className="shop-button">SHOP NOW</button>
          </div>
        </div>
        <div className="products-contents">
          <div className="product-sections">
            <div className="popular-categories">
              <h2>Popular Categories</h2>
              <div className="popular-product">
                {popularCategories.map((product) => (
                  <CategoriesCard
                    key={product.id}
                    pic={product.image}
                    productName={product.name}
                  />
                ))}
              </div>
            </div>
            <div className="new-arrival-products">
              <h2> New Arrival Products</h2>
              <div className="arrival-list">
                {NewArrivals.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    pic={product.image}
                    price={product.price}
                    rating={product.rating}
                    onClick={() => handleSingleProductNavigate(product.id)}
                  />
                ))}
              </div>
            </div>
            <div className="vendors-list">
              <h2>Our Vendors</h2>
              <div className="vendors-container">
                {VendorsList.map((vendor) => (
                  <VendorsCard
                    key={vendor.id}
                    pic={vendor.image}
                    name={vendor.name}
                    city={vendor.city}
                    onClick={() => handleNavigate(vendor.id)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="choose-us">
            <h2>Why People Choose Us</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
