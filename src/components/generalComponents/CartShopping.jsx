import PropTypes from "prop-types";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "../../css/cartShopping.css";
import { useEffect } from "react";

export function CartShopping({ cart, cartItems, handleCart, setCartItems }) {
  useEffect(() => {
    if (cart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cart]);

  const handleBuy = () => {
    alert("Compra realizada!");
  };

  const handleDeleteItem = async (id) => {
    try {
      const response = await axios.delete(
        `https://bknd-seven.vercel.app/api/cart/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product._id !== id)
      );
      console.log(response);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleIncrementItem = async (id) => {
    try {
      const response = await axios.post(
        `https://bknd-seven.vercel.app/api/cart/increment/${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product._id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

      console.log(response);
    } catch (error) {
      console.error("Error incrementing item quantity:", error);
    }
  };

  const handleDecrementItem = async (id) => {
    try {
      const response = await axios.delete(
        `https://backend-food-repo.vercel.app/api/cart/decrement/${id}`,
        {
          withCredentials: true,
        }
      );
      setCartItems((prevItems) =>
        prevItems
          .map((item) =>
            item.product._id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
      console.log(response);
    } catch (error) {
      console.error("Error decrementing item quantity:", error);
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <>
      <div
        className={`overlay ${cart ? "show" : ""}`}
        onClick={handleCart}
      ></div>
      <div className={`cart-side ${cart ? "open" : ""}`}>
        <div className="nav-cart">
          <button className="close-btn" onClick={handleCart}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h3 className="title-cart">Cart</h3>
        </div>

        <div className="cont-img">
          {cartItems.map((item) => (
            <div key={item.product._id} className="info-cart-container">
              <div className="img-cont-cart">
                <img
                  src={item.product.img}
                  className="img-cart"
                  alt="cart-food"
                />
              </div>
              <div className="title-product-cont">
                <h5 className="title-cart-product">{item.product.title}</h5>
                <div className="cont-parraf">
                  <p className="parraf-cart">{item.product.parrafo}</p>
                </div>
              </div>
              <div className="info-cart">
                <button
                  className="btn-quantity"
                  onClick={() => handleDecrementItem(item.product._id)}
                >
                  -
                </button>
                <p>{item.quantity}</p>

                <button
                  className="btn-quantity"
                  onClick={() => handleIncrementItem(item.product._id)}
                >
                  +
                </button>
                <FontAwesomeIcon
                  onClick={() => handleDeleteItem(item.product._id)}
                  icon={faTrashAlt}
                  className="trash-icon"
                />
              </div>
              <div className="price-container">
                <p className="p-price">${item.product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-total">
          <div className="total">
            <h4>Total:</h4>
            <h4>${total.toFixed(2)}</h4>
          </div>

          <button onClick={handleBuy} className="buy-btn">
            Comprar
          </button>
        </div>
      </div>
    </>
  );
}

CartShopping.propTypes = {
  cart: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleCart: PropTypes.func.isRequired,
  setCartItems: PropTypes.func.isRequired,
};
