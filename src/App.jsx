import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import Product from "./components/Product/Product";
import { Success } from "./components/utilitys/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/success-pay" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
