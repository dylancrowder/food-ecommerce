import { Customers } from "./customers/Customers";
import { Header } from "./header/Header";
import { Orders } from "./menus/Menus";
import { Prestation } from "./prestations/Prestations";
import delivery from "../../img/delivery.png";
import order from "../../img/order.png";
import courier from "../../img/courier.png";
import foodCustomer2 from "../../img/food-customer2.jpg";
import foodCustomer3 from "../../img/food-customer3.jpg";
import foodCustomer4 from "../../img/img-customer4.jpg";
import perfil from "../../img/perfil2.jpg";
import img from "../../img/comida.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import "./home-movile.css";
import useAuth from "../../hooks/useAuth";
export default function Home() {
  const env = import.meta.env.VITE_API_URL;

  //Hoock validacion
  useAuth(env);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <div className="container-principal">
        <Header img={img} />
        <main className="main-container">
          <Prestation order={order} delivery={delivery} courier={courier} />
          <Orders />
          <Customers
            foodCustomer2={foodCustomer2}
            foodCustomer3={foodCustomer3}
            foodCustomer4={foodCustomer4}
            perfil={perfil}
          />
        </main>
      </div>
    </>
  );
}
