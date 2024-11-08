import "./product.css";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import axios from "axios";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import CardProduct from "../../components/card/CardProduct";
import NavBar from "../../components/navbar/NavBar";
import Animations from "../../utilitys/Loader";
import { Error } from "../../utilitys/Error";
import useAuth from "../../hooks/useAuth";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const env = import.meta.env.VITE_API_URL;

  //Hook auth
  useAuth(env);
  //si esta en cache que no muestre la loading
  const fetchCategory = async () => {
    const token = localStorage.getItem("token");
    setLoading(
      AOS.init({
        duration: 1600,
      })
    );
    try {
      const response = await axios.get(
        `${env}/api/category/${selectedCategory}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      setProducts(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1600,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCategory();
  }, []);

  useEffect(() => {
    fetchCategory();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Animations />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <Error message={error.message} />
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
          <FontAwesomeIcon className="icono" icon={faArrowDownWideShort} />
          <button
            onClick={() => setSelectedCategory("All")}
            className={selectedCategory === "All" ? "active" : ""}
          >
            {"Todas"}
          </button>
          <button
            onClick={() => setSelectedCategory("Pastas")}
            className={selectedCategory === "Pastas" ? "active" : ""}
          >
            {"Pastas"}
          </button>
          <button
            onClick={() => setSelectedCategory("Hamburguesa")}
            className={selectedCategory === "Hamburguesa" ? "active" : ""}
          >
            {"Hamburguesa"}
          </button>
          <button
            onClick={() => setSelectedCategory("Pizza")}
            className={selectedCategory === "Pizza" ? "active" : ""}
          >
            {"Pizza"}
          </button>
          <button
            onClick={() => setSelectedCategory("Ensaladas")}
            className={selectedCategory === "Ensaladas" ? "active" : ""}
          >
            {"Ensaladas"}
          </button>
        </div>

        <div className="mobile-filter">
          <select
            className="select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">Todos los menus</option>
            <option value="Pastas">Pastas</option>
            <option value="Hamburguesa">Hamburguesa</option>
            <option value="Pizza">Pizza</option>
            <option value="Ensaladas">Ensaladas</option>
          </select>
        </div>

        <div className="card-container-product">
          <div data-aos="fade-left">
            <CardProduct products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
