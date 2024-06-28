import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function CardProduct() {
  const [productsC, setProducts] = useState([]);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!fetchedRef.current) {
      fetchProduct();
      fetchedRef.current = true;
    }
  }, []);

  const fetchProduct = () => {
    axios
      .get("http://localhost:8080/api/getFour")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  return (
    <>
      <div className="container-img-service container-cards-menus">
        {productsC.map((cards, key) => (
          <article key={key} className="servicio-img-container card-container">
            <div className="card">
              <div className="food-img-container">
                <img className="food-img" src={cards.img} alt={cards.title} />
              </div>

              <div className="card-footer">
                <div className="text-card">
                  <h4>{cards.title}</h4>
                  <p>{cards.parrafo}</p>
                  <p className="price">${cards.price}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
