import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import img from "../../img/comida.png";

export default function NavBar() {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Comida", price: 300, quantity: 2 },
    { id: 2, name: "Comida", price: 300, quantity: 2 }
    // Puedes agregar más ítems si lo deseas
  ]);

  function handleCart() {
    setCart((cart) => !cart);
    console.log(cart);
  }

  function handleBuy() {
    alert("Compra realizada!");

  }

  function handleDeleteItem(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <nav className="nav-container">
        <Link to="/">
          <a href="#" className="nav-text">
            Home
          </a>
        </Link>
        <Link to="/products">
          <a href="#" className="nav-text">
            Products
          </a>
        </Link>

        <a onClick={handleCart} className="nav-text">
          Cart
        </a>
      </nav>
      <div className={`cart-side ${cart ? "open" : ""}`}>
        <div className="nav-cart">
          <button className="close-btn" onClick={handleCart}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <h3 className="title-cart">Cart</h3>
        </div>

        <div className="cont-img">
          {cartItems.map((item) => (
            <div key={item.id} className="info-cart-container">
              <img src={img} className="img-cart" alt="cart-food" />
              <div className="info-cart">
                <button className="btn-quantity">+</button>
                <p> {item.quantity}</p>
                <button className="btn-quantity">-</button>
                <FontAwesomeIcon icon={faTrashAlt} className="trash-icon" />
              </div>
              <div
                className="delete-container"
                onClick={() => handleDeleteItem(item.id)}
              >
                <p className="p-price">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-total">
          <div className="total">
            <h4>Total:</h4>
            <h4> ${total}</h4>
          </div>

          <button onClick={handleBuy} className="buy-btn">
            Comprar
          </button>
        </div>
      </div>
    </>
  );
}
