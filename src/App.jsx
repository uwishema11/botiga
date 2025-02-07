import PagesNotFound from "./components/PagesNotFound.jsx";
import HomeView from "./views/HomeView.jsx";
import Layout from "./components/Layout.jsx";
import ContactView from "./views/ContactView.jsx";
import SingleProductView from "./components/SingleProductView.jsx";
import ShopView from "./views/ShopView.jsx";
import LoginPage from "./components/Login.jsx";
import SinglePage from "./components/SingleVendors.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="shop" element={<ShopView />} />
            <Route path="contact" element={<ContactView />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/singleCard/:id" element={<SingleProductView />} />
            <Route path="/singleVendor/:id" element={<SinglePage />} />
            <Route path="*" element={<PagesNotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
