import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCartPlus,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./navBar.css";
import { CartShopping } from "../../pages/cart/CartShopping";

export default function NavBar() {
  const env = import.meta.env.VITE_API_URL;
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCart = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["Content-Type"] = "application/json";

    const response = await axios.get(`${env}/api/cart/find`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    });
    setCart((cart) => !cart);
    setCartItems(response.data.items);
  };

  //https://github.com/goldbergyoni/nodebestpractices?tab=readme-ov-file
  return (
    <>
      <div className="links-h">
        <nav className="nav-container">
          <Link className="link-a" to="/">
            <FontAwesomeIcon className="icon-nav" icon={faHome} size="1x" />
            <p className="parraf-nav">Inicio</p>
          </Link>
          <Link className="link-a" to="/products">
            <FontAwesomeIcon className="icon-nav" icon={faCartPlus} size="1x" />
            <p className="parraf-nav">Productos</p>
          </Link>

          <Link className="link-a" onClick={handleCart}>
            <FontAwesomeIcon
              className="icon-nav"
              icon={faShoppingBag}
              size="1x"
            />
            <p className="parraf-nav">Carrito</p>
          </Link>
        </nav>
        <CartShopping
          cart={cart}
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleCart={handleCart}
        />
      </div>
    </>
  );
}
