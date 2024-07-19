import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCartPlus,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../../css/navBar.css";
import { CartShopping } from "./CartShopping";

export default function NavBar() {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCart = async () => {
    axios.defaults.withCredentials = true; 
    axios.defaults.headers.common["Content-Type"] = "application/json";

    const response = await axios.get(
      "https://backendfood.vercel.app/cart/find",
      {
        withCredentials: true,
      }
    );
    setCart((cart) => !cart);
    setCartItems(response.data.items);
  };

  return (
    <>
      <div className="links-h">
        <nav className="nav-container">
          <Link className="link-a" to="/">
            <FontAwesomeIcon className="icon-nav" icon={faHome} size="1x" />
            <p className="parraf-nav">Home</p>
          </Link>
          <Link className="link-a" to="/products">
            <FontAwesomeIcon className="icon-nav" icon={faCartPlus} size="1x" />
            <p className="parraf-nav">Products</p>
          </Link>

          <Link className="link-a" onClick={handleCart}>
            <FontAwesomeIcon
              className="icon-nav"
              icon={faShoppingBag}
              size="1x"
            />
            <p className="parraf-nav">Cart</p>
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
