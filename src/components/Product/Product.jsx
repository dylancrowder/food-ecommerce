import "./product.css";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "aos/dist/aos.css";
import axios from "axios";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";

import CardProduct from "../generalComponents/CardProduct";
import NavBar from "../generalComponents/NavBar";
import Animations from "../utilitys/Loader";
import { Error } from "../utilitys/Error";

const Product = () => {
  const local = "http://localhost:8080";
  const online = "https://backendfood.vercel.app";
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategory = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      try {
        const response = await axios.get("http://localhost:8080/token");
        localStorage.setItem("token", response.data.token);
        console.log(response);

        window.location.reload();
      } catch (error) {
        console.error("Error fetching token", error);
      }
    }

    try {
      const response = await axios.get(
        `${local}/api/category/${selectedCategory}`,
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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

          <div className="product-carousel">
            <Slider {...settings}>
              <div className="slide-item">
                <h3>1</h3>
              </div>
              <div className="slide-item">
                <h3>2</h3>
              </div>
              <div className="slide-item">
                <h3>3</h3>
              </div>
              <div className="slide-item">
                <h3>4</h3>
              </div>
              <div className="slide-item">
                <h3>5</h3>
              </div>
              <div className="slide-item">
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>

        <div className="cnt">
          <div className="filter-title-container">
            <h2 className="filter-title">Filter</h2>
            <FontAwesomeIcon className="icono" icon={faArrowDownWideShort} />
          </div>

          <div className="filter-category">
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
