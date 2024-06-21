import PropTypes from "prop-types";
export function Customers({
  foodCustomer2,
  foodCustomer3,
  foodCustomer4,
  perfil,
}) {
  return (
    <>
      <section className="container-customers">
        <div className="img-container-customers">
          <div className="img-customer">
            <img src={foodCustomer3} alt="Cliente disfrutando la comida" />
          </div>
          <div className="img-customer-2">
            <div>
              <img src={foodCustomer4} alt="Cliente disfrutando la comida" />
            </div>
            <div>
              <img src={foodCustomer2} alt="Cliente disfrutando la comida" />
            </div>
          </div>
        </div>
        <div className="text-container-customers">
          <header className="servicio-text-container text-customer-header">
            <h2>Clientes</h2>
            <h3>Nuestros clientes</h3>
          </header>
          <div data-aos="fade-left" className="card-client-container">
            <div className="client-card">
              <div className="avatar-text">
                <div className="avatar">
                  <img src={perfil} alt="Avatar de Carolina del Valle" />
                </div>
                <div className="text">
                  <h3>Carolina del Valle</h3>
                  <span>★★★★★</span>
                </div>
              </div>
              <div className="parrafo-client">
                <p>
                  La comida es increíblemente deliciosa y el servicio es
                  impecable. ¡Definitivamente volveré!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Customers.propTypes = {
  foodCustomer2: PropTypes.string.isRequired,
  foodCustomer3: PropTypes.string.isRequired,
  foodCustomer4: PropTypes.string.isRequired,
  perfil: PropTypes.string.isRequired,
};
