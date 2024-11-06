import PropTypes from "prop-types";
import NavBar from "../../../components/navbar/NavBar";
import { Link } from "react-router-dom";
import "./header.css";

export function Header({ img }) {
  return (
    <>
      <header className="header-container">
        <NavBar />

        <div className="custom-shape-divider-bottom-1720114021">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container-header">
          <div className="container-text-header">
            <h1 className="title-header-text">Te lo entregamos.</h1>
            <p className="p-header-paragraph">
              Ven a nuestra tienda y prueba la mejor comida, o también puedes
              pedirla desde tu casa.
            </p>
            <Link to="/products" className="button-header-link">
              <button className="button-header">Compra Ahora</button>
            </Link>
          </div>
          <div></div>
          <div data-aos="fade-left" className="container-img-header">
            <img className="img-header" src={img} alt="Comida deliciosa" />
          </div>
        </div>
      </header>
    </>
  );
}

Header.propTypes = {
  img: PropTypes.string.isRequired,
};
