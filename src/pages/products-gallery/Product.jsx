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

const Product = () => {
  const env = import.meta.env.VITE_API_URL;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategory = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      try {
        const response = await axios.get(`${env}/token`);
        localStorage.setItem("token", response.data.token);
        window.location.reload();
      } catch (error) {
        console.error("Error fetching token", error);
      }
    }

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
      duration: 1500,
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

  return (
    <>
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
              {"All"}
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
              <option value="All">All</option>
              <option value="Pastas">Pastas</option>
              <option value="Hamburguesa">Hamburguesa</option>
              <option value="Pizza">Pizza</option>
              <option value="Ensaladas">Ensaladas</option>
            </select>
          </div>

          <div className="card-container-product">
            {loading ? (
              <Animations />
            ) : error ? (
              <Error message={error.message} />
            ) : (
              <div data-aos="fade-left">
                <CardProduct products={products} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
