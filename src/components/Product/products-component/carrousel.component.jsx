import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import comida from "../../../img/comida.png";
import "./carrousel.css";

export function Carrousel() {
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
      <div className="product-carousel">
        <Slider {...settings}>
          <div className="slide-item">
            <div className="img-content-car">
              <img className="img-carrousel" src={comida} alt="Promotion 1" />
            </div>

            <div className="slide-caption">
              <h3>50% Off on Pizzas!</h3>

              <p className="subtite-carrousel">
                Enjoy our delicious pizzas with a 50% discount this weekend!
              </p>
            </div>
          </div>

          <div className="slide-item">
            <div className="img-content-car">
              <img className="img-carrousel" src={comida} alt="Promotion 1" />
            </div>

            <div className="slide-caption">
              <h3>Buy 1 Get 1 Free</h3>

              <p className="subtite-carrousel">
                Order any burger and get another one absolutely free!
              </p>
            </div>
          </div>
          <div className="slide-item">
            <div className="img-content-car">
              <img className="img-carrousel" src={comida} alt="Promotion 1" />
            </div>

            <div className="slide-caption">
              <h3>Family Pasta Combo</h3>

              <p className="subtite-carrousel">
                Get a special combo of pasta for the entire family at just
                $19.99!
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
