
import "./menus.css";
import { Link } from "react-router-dom";
import useFetchProducts from "../../../hooks/Hooks"
import CardProduct from "../../../components/card/CardProduct";
import Animations from "../../../utilitys/Loader";
import { Error } from "../../../utilitys/Error";

export function Orders() {
  const env = import.meta.env.VITE_API_URL;
  const { products, loading, error } = useFetchProducts(`${env}/api/four`);

  if (loading) return <Animations />;
  if (error) return <Error message={error.message} />;

  return (
    <>
      <section className="menus-container menus-card-container">
        <header className="order-text-container">
          <h3>Los más pedidos</h3>
          <h2>Nuestros menús</h2>
        </header>

        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <CardProduct products={products} />
        </div>
        <div className="btt">
          <div className="highlighted-container">
            <Link to="/products">
              <button className="button-header service-button btn-order">
                Menus
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
