import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardProduct from "../generalComponents/CardProduct";
import "./product.css";
import NavBar from "../generalComponents/NavBar";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <div className="container-header-products">
        <div className="NavBar-container">
          <NavBar  />
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

      <div className="filter-category">
        {["All", "Pastas", "Hamburguesa", "Pizza", "Ensaladas"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          )
        )}
      </div>
      <div className="card-products-container">
  {/*       <CardProduct /> */}
      </div>
    </>
  );
};

export default Product;
