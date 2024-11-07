import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import "./styles/variables.css";
import { Footer } from "./components/footer/Footer";
import Product from "./pages/products-gallery/Product"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
