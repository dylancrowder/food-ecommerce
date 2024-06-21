import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import Product from "./components/Product/Product";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
