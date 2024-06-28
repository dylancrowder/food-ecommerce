import PropTypes from "prop-types";
import NavBar from "../generalComponents/NavBar";
import { Link } from "react-router-dom";
export function Header({ img }) {
  return (
    <>
      <header className="header-container">
        <NavBar />

        <div className="container-header">
          <div className="container-text-header">
            <h1 className="title-header-text">Nosotros te lo enviamos.</h1>
            <p className="p-header-paragraph">
              Ven a nuestro local y prueba la mejor comida, o también puedes
              pedirla desde tu casa.
            </p>
            <Link to="/products" className="button-header-link">
              <button className="button-header">Comprar</button>
            </Link>
          </div>
          <div className="container-img-header">
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
