import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import PagesNotFound from "./components/PagesNotFound.jsx";
import HomeView from "./views/HomeView.jsx";
import Layout from "./components/Layout.jsx";
import ShopView from "./views/ShopView.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<ShopView />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PagesNotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
