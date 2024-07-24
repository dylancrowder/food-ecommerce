import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const token = localStorage.getItem("token");
    const fetchProducts = async () => {
      console.log(url);
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        console.log("esta es la respuesta del servidor", response.data);
        setProducts(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  return { products, loading, error };
};

export default useFetchProducts;
