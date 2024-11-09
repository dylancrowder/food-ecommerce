import "./product.css";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import axios from "axios";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import CardProduct from "../../components/card/CardProduct";
import NavBar from "../../components/navbar/NavBar";
import { Error } from "../../utilitys/Error";
import useAuth from "../../hooks/useAuth";
import { Animations } from "../../utilitys/gallery-skeleton";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const env = import.meta.env.VITE_API_URL;

  // Initialize AOS once when component mounts
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);

  // Initialize auth hook
  useAuth(env);

  // Fetch products by category
  const fetchCategory = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${env}/api/category/${selectedCategory}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      setProducts(response.data);
    } catch (error) {
      setError(error.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  // Fetch products on initial render and when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCategory();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);

  if (error) {
    return (
      <div className="error-container">
        <Error message={error} />
      </div>
    );
  }

  return (
    <div className="container-products">
      <div className="container-header-products">
        <div className="NavBar-container">
          <NavBar />
        </div>
      </div>

      <div className="cnt">
        <div className="filter-category">
          <FontAwesomeIcon className="icono" icon={faArrowDownWideShort} aria-label="Category Filter Icon" />
          {["All", "Pastas", "Hamburguesa", "Pizza", "Ensaladas"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
              aria-label={`Select ${category} category`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mobile-filter">
          <select
            className="select"
            value={selectedCategory}
            onChange={handleCategoryChange}
            aria-label="Category selection dropdown"
          >
            <option value="All">Todos los menus</option>
            <option value="Pastas">Pastas</option>
            <option value="Hamburguesa">Hamburguesa</option>
            <option value="Pizza">Pizza</option>
            <option value="Ensaladas">Ensaladas</option>
          </select>
        </div>

        <div className="card-container-product" aria-live="polite">
          {loading ? (
            <Animations />
          ) : (
            <div data-aos="fade-left">
              <CardProduct products={products} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
