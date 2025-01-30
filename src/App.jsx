import PagesNotFound from "./components/PagesNotFound.jsx";
import HomeView from "./views/HomeView.jsx";
import Layout from "./components/Layout.jsx";
import ContactView from "./views/ContactView.jsx";
import ShopView from "./views/ShopView.jsx";
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
            <Route path="*" element={<PagesNotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
