import PropTypes from "prop-types";
import axios from "axios";
import "../../css/card.css";
export default function CardProduct({ products }) {
  const local = "http://localhost:8080";
  const online = "https://backendfood.vercel.app";

  const handleBuy = async (productID) => {
    console.log(productID);
    try {
      const response = await axios.post(
        `${online}/api/cart/create`,

        { productID }, // Pasa el productID como parte del cuerpo de la solicitud
        {
          withCredentials: true, // Incluir cookies en la solicitud
        }
      );

      console.log(response.data); // Acceder a los datos de la respuesta, si es necesario
    } catch (error) {
      console.error("Error al comprar:", error);
    }
  };

  return (
    <>
      <div className="container-img-service container-cards-menus">
        {products.map((card) => (
          <article
            key={card.id}
            className="servicio-img-container card-container"
            onClick={() => handleBuy(card._id)}
          >
            <div className="card">
              <div className="food-img-container">
                <img className="food-img" src={card.img} alt={card.title} />
              </div>
              <div className="card-footer">
                <div className="text-card">
                  <h4 className="cart-title">{card.title}</h4>
                  <p className="cart-parraf">{card.parrafo}</p>
                  <p className="price">${card.price}</p>
                </div>
                <div className="button-container">
                  <button className="button-card-compra">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

CardProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      parrafo: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
