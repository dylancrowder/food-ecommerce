import { Link } from "react-router-dom";
import CardProduct from "../generalComponents/CardProduct";
export function Orders() {
  return (
    <>
      <section className="menus-container menus-card-container">
        <header className="servicio-text-container">
          <h2>Nuestros menús</h2>
          <h3>Los más pedidos</h3>
          <p>Estos son los menús favoritos de nuestros clientes.</p>
        </header>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <CardProduct />
        </div>
        <Link to="/products">
          <button className="button-header service-button">Menus</button>
        </Link>
      </section>
    </>
  );
}
