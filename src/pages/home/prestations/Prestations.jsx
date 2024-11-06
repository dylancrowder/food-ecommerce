import PropTypes from "prop-types";
import "./prestations.css";
export function Prestation({ order, delivery, courier }) {
  return (
    <>
      <section className="nuestro-servicio-container">
        <header className="servicio-text-container">
          <h3>Nuestras prestaciones</h3>
          <p>
            Te garantizamos calidad y excelencia en nuestros servicios.
          </p>
        </header>
        <div className="servicio-img-container images-services">
          <article>
            <img
              className="img-servicio"
              src={order}
              alt="Proceso de ordenar comida"
            />
            <h3>Fácil de comprar</h3>
            <p>Solo ordena desde la aplicación.</p>
          </article>
          <article>
            <img
              className="img-servicio"
              src={delivery}
              alt="Entrega rápida de comida"
            />
            <h3>Entrega rápida</h3>
            <p>El delivery llegará a tiempo, es nuestra prioridad.</p>
          </article>
          <article>
            <img
              className="img-servicio"
              src={courier}
              alt="Entrega de comida de alta calidad"
            />
            <h3>La mejor calidad</h3>
            <p>Te ofrecemos la mejor calidad de comida.</p>
          </article>
        </div>

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
      </section>
    </>
  );
}

Prestation.propTypes = {
  order: PropTypes.string.isRequired,
  delivery: PropTypes.string.isRequired,
  courier: PropTypes.string.isRequired,
};
