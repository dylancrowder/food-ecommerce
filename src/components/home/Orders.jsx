import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export function Orders({ productos, foodImg }) {

  return (
    <>
      <section className="menus-container menus-card-container">
        <header className="servicio-text-container">
          <h2>Nuestros menús</h2>
          <h3>Los más pedidos</h3>
          <p>Estos son los menús favoritos de nuestros clientes.</p>
        </header>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className="container-img-service container-cards-menus">
            {productos.map((cards, key) => (
              <article
                key={key}
                className="servicio-img-container card-container"
              >
                <div className="card">
                  <div className="food-img-container">
                    <img className="food-img" src={foodImg} alt={cards.title} />
                  </div>

                  <div className="card-footer">
                    <div className="text-card">
                      <h4>{cards.title}</h4>
                      <p>{cards.parrafo}</p>
                      <p className="price">${cards.price}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Link to="/products">
          <button className="button-header service-button">Menus</button>
        </Link>
      </section>
    </>
  );
}
Orders.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      parrafo: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  foodImg: PropTypes.string.isRequired,
};
