import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import Product from "./components/Product/Product";
import axios from "axios";

function App() {
  const fetchToken = async () => {
    try {
      // Realiza una petición para obtener el token y guardarlo en localStorage
      const response = await axios.get("http://localhost:8080/", {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.token);
      console.log(response);
    } catch (error) {
      console.error("Error fetching token", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      fetchToken();
    }
  }, []);

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
