import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import logoPrincipal from "../../img/logo.png";


function FooterPrinci() {
  return (
    <footer className="bg-dark text-light py-5  text-center">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <p>
            <img src={logoPrincipal} alt="logo salud y sonrisa"  className="logoPrincipal"/>
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled fs-5">
              <li><a href="#home" className=" text-decoration-none link-light">Inicio</a></li>
              <li><a href="#servicios" className=" text-decoration-none link-light">Servicios</a></li>
              <li><a href="#nosotros" className=" text-decoration-none link-light">Sobre Nosotros</a></li>
              <li><a href="#contacto" className=" text-decoration-none link-light">Contacto</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contáctanos</h5>
            <p >123 Calle Principal, Ciudad</p>
            <p >Teléfono: +54 123 456 789</p>
            <p >Email: contacto@clidental.com</p>
            <div className="d-flex gap-3 mt-3 justify-content-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
              <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} className="fa-2x"/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
              <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} className="fa-2x"/>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center">
            <p className=" mb-0">&copy; {new Date().getFullYear()} Clínica Dental. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterPrinci;
