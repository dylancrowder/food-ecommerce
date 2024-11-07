import { useEffect } from "react";
import axios from "axios";

const useAuth = (env) => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      const fetchToken = async () => {
        try {
          const response = await axios.get(`${env}/token`);
          localStorage.setItem("token", response.data.token);

          window.location.reload();
        } catch (error) {
          console.error("Error fetching token", error);
        }
      };
      fetchToken();
    }
  }, [env]);
};

export default useAuth;
