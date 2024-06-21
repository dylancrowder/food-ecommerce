import PropTypes from "prop-types";

export function Prestation({ order, delivery, courier }) {
  return (
    <>
      <section className="nuestro-servicio-container">
        <header className="servicio-text-container">
          <h2>¿Cómo funciona?</h2>
          <h3>Nuestras prestaciones</h3>
          <p>
            Te garantizamos la calidad y la excelencia de nuestros servicios.
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
      </section>
    </>
  );
}

Prestation.propTypes = {
  order: PropTypes.string.isRequired,
  delivery: PropTypes.string.isRequired,
  courier: PropTypes.string.isRequired,
};
