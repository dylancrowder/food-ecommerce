import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ReactDOM from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./card.css";

export default function CardProduct({ products }) {
  const env = import.meta.env.VITE_API_URL;

  const handleBuy = async (productID) => {
    const token = localStorage.getItem("token");
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["Content-Type"] = "application/json";

    try {
      const response = await axios.post(
        `${env}/api/cart/create`,
        { productID },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      toast.success("Product added successfully", {
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "custom-toast",
      });
    } catch (error) {
      const errorMessage = error.message;

      toast.error(errorMessage, {
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "custom-toast",
      });
    }
  };

  
  return (
    <>
      {ReactDOM.createPortal(
        <ToastContainer />,
        document.getElementById("toast-root")
      )}

      <div className="container-img-service container-cards-menus">
        {products.map((card) => (
          <article
            key={card._id}
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
                  <button
                
                    className="button-card-compra"
                  >
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
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      parrafo: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
