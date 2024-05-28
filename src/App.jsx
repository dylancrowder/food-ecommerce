import "./App.css";
import img from "./img/comida.png";
import delivery from "./img/delivery.png";
import order from "./img/order.png";
import courier from "./img/courier.png";
import foodImg from "./img/food-img.png";
import foodCustomer2 from "./img/food-customer2.jpg";
import foodCustomer3 from "./img/food-customer3.jpg";
import foodCustomer4 from "./img/img-customer4.jpg";
import perfil from "./img/perfil2.jpg";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Configura la duración de la animación, si lo deseas
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
      <header className="header-container">
          <nav className="nav-container " aria-label="Main navigation">
            <a href="#" className="nav-text">
              Home
            </a>

            <a href="#" className="nav-text">
              Products
            </a>
            <a href="#" className="nav-text">
              Cart
            </a>
          </nav>

          <div className="container-header">
            <div className="container-text-header">
              <h1 className="title-header-text">Nosotros te lo enviamos.</h1>
              <p className="p-header-paragraph">
                Ven a nuestro local y prueba la mejor comida, o también puedes
                pedirla desde tu casa.
              </p>
              <button className="button-header">Comprar</button>
            </div>
            <div className="container-img-header">
              <img className="img-header" src={img} alt="Comida deliciosa" />
            </div>
          </div>
        </header> 

        <main className="main-container">
          <section className="nuestro-servicio-container">
            <header className="servicio-text-container">
              <h2>¿Cómo funciona?</h2>
              <h3>Nuestras prestaciones</h3>
              <p>
                Te garantizamos la calidad y la excelencia de nuestros
                servicios.
              </p>
            </header>
            <div className="servicio-img-container images-services">
              <article>
                <img
                  className="img-servicio"
                  src={order}
                  alt="Proceso de ordenar comida"
                />
                <h3>Fácil de comprar</h3>
                <p>Solo ordena desde la aplicación.</p>
              </article>
              <article>
                <img
                  className="img-servicio"
                  src={delivery}
                  alt="Entrega rápida de comida"
                />
                <h3>Entrega rápida</h3>
                <p>El delivery llegará a tiempo, es nuestra prioridad.</p>
              </article>
              <article>
                <img
                  className="img-servicio"
                  src={courier}
                  alt="Entrega de comida de alta calidad"
                />
                <h3>La mejor calidad</h3>
                <p>Te ofrecemos la mejor calidad de comida.</p>
              </article>
            </div>
          </section>

          <section className="menus-container menus-card-container">
            <header className="servicio-text-container">
              <h2>Nuestros menús</h2>
              <h3>Los más pedidos</h3>
              <p>Estos son los menús favoritos de nuestros clientes.</p>
            </header>

            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="container-img-service container-cards-menus">
                {productos.map((cards, key) => (
                  <article
                    key={key}
                    className="servicio-img-container card-container"
                  >
                    <div className="card">
                      <div className="food-img-container">
                        <img
                          className="food-img"
                          src={foodImg}
                          alt={cards.title}
                        />
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
            </div>
            <button className="button-header service-button">Menus</button>
          </section>

          <section className="container-customers">
            <div className="img-container-customers">
              <div className="img-customer">
                <img src={foodCustomer3} alt="Customer Food 3" />
              </div>
              <div className="img-customer-2">
                <div>
                  <img src={foodCustomer4} alt="Customer Food 4" />
                </div>
                <div>
                  <img src={foodCustomer2} alt="Customer Food 2" />
                </div>
              </div>
            </div>
            <div  className="text-container-customers">
              <header className="servicio-text-container text-customer-header">
                <h2>Clientes</h2>
                <h3>Lo que dicen nuestros clientes</h3>
              </header>
              <div data-aos="fade-left" className="card-client-container">
                <div className="client-card">
                  <div className="avatar-text">
                    <div className="avatar">
                      <img src={perfil} alt="" />
                    </div>
                    <div className="text">
                      <h3>Carolina del Valle</h3>
                      <span>★★★★★</span>
                    </div>
                  </div>
                  <div className="parrafo-client">
                    <p>
                      La comida es increíblemente deliciosa y el servicio es
                      impecable. ¡Definitivamente volveré!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="footer-container">
            <div className="footer-column">
              <h3>Redes Sociales</h3>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>About Us</h3>
              <ul>
                <li>
                  <a href="#">Nuestra Historia</a>
                </li>
                <li>
                  <a href="#">Misión y Visión</a>
                </li>
                <li>
                  <a href="#">Equipo</a>
                </li>
                <li>
                  <a href="#">Carreras</a>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contacto</h3>
              <ul>
                <li>
                  <a href="#">Email: contacto@comidaonline.com</a>
                </li>
                <li>
                  <a href="#">Teléfono: +123 456 7890</a>
                </li>
                <li>
                  <a href="#">Ubicación: Calle Falsa 123, Ciudad</a>
                </li>
                <li>
                  <a href="#">Formulario de Contacto</a>
                </li>
              </ul>
            </div>
          </div>
          <p>&copy; 2024 Dylan Crowder. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
