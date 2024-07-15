 import "../../css/footer.css"
 export function Footer() {
  return (
    <>
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
                <a href="mailto:contacto@comidaonline.com">
                  Email: contacto@comidaonline.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890">Teléfono: +123 456 7890</a>
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
    </>
  );
}
