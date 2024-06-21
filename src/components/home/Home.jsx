import { Customers } from "./Customers";
import { Header } from "./Header";
import { Orders } from "./Orders";
import { Prestation } from "./Prestations";
import delivery from "../../img/delivery.png";
import order from "../../img/order.png";
import courier from "../../img/courier.png";
import foodImg from "../../img/food-img.png";
import foodCustomer2 from "../../img/food-customer2.jpg";
import foodCustomer3 from "../../img/food-customer3.jpg";
import foodCustomer4 from "../../img/img-customer4.jpg";
import perfil from "../../img/perfil2.jpg";
import img from "../../img/comida.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const productos = [
    {
      img: img,
      title: "Milanesas",
      parrafo: "Milanesas con papas fritas",
      price: 500,
    },
    {
      img: img,
      title: "Hamburguesa",
      parrafo: "Hamburguesa con queso y papas",
      price: 450,
    },
    {
      img: img,
      title: "Pizza",
      parrafo: "Pizza de muzzarella con orégano",
      price: 600,
    },
    {
      img: img,
      title: "Ensalada",
      parrafo: "Ensalada mixta con aderezo",
      price: 300,
    },
  ];

  return (
    <>
      <div className="container-principal">
        <Header img={img} />
        <main className="main-container">
          <Prestation order={order} delivery={delivery} courier={courier} />

          <Orders productos={productos} foodImg={foodImg} />

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
