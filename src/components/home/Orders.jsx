import { Link } from "react-router-dom";
import CardProduct from "../generalComponents/CardProduct";
import useFetchProducts from "../../hooks/Hooks";
import "../../css/orders.css";

export function Orders() {
  const local = "http://localhost:8080";
  const online = "https://backendfood.vercel.app";
  const { products, loading, error } = useFetchProducts(`${online}/api/four`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching productss: {error.message}</p>;

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
