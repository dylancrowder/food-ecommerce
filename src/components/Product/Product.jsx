import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardProduct from "../generalComponents/CardProduct";
import "./product.css";
import NavBar from "../generalComponents/NavBar";
import useFetchProducts from "../../hooks/Hooks";

import "aos/dist/aos.css";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { products } = useFetchProducts(
    `http://localhost:8080/api/category/${selectedCategory}`
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
            <h2 className="filter-title">Categories</h2>
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
