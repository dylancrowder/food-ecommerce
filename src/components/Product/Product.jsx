import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardProduct from "../generalComponents/CardProduct";
import "./product.css";
import NavBar from "../generalComponents/NavBar";
import useFetchProducts from "../../hooks/Hooks";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const local = "http://localhost:8080";
  const online = "https://backendfood.vercel.app";
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { products } = useFetchProducts(
    `${online}/api/category/${selectedCategory}`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <div data-aos="fade-left">
              <CardProduct products={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
