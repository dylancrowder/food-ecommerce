import "./product.css";
import { useEffect } from "react";
const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="food-product">
      <h1>productos</h1>
    </div>
  );
};

export default Product;
