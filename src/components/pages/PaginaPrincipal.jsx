import { Row, Col, Button, Container } from "react-bootstrap";
import Bienvenida from "../../img/sonrisa.png";
import Servicios from "./Servicios";
import Sobrenosotros from "./Sobrenosotros";
import Ubicacion from "./Ubicacion";
import Contacto from "./Contacto";

const PaginaPrincipal = () => {
  return (
    <section>
      <Container>
        <Row className="d-flex flex-column flex-lg-row align-items-center mt-5">
          <Col
            xs={12}
            lg={6}
            className="text-center text-lg-start px-md-3 px-lg-5 mb-4 mb-lg-0"
          >
            <h5>Sea Bienvenido</h5>
            <h1 className="fs-2">Clínica Dental Salud & Sonrisa</h1>
            <p>
              Ofrecemos una variedad de servicios odontológicos para cuidar y
              mejorar tu sonrisa. Nuestro equipo de profesionales está aquí para
              ayudarte a mantener una salud dental óptima.
            </p>
            <p>
              ¡Agenda tu consulta hoy mismo y descubre cómo una sonrisa
              saludable puede cambiar tu vida!
            </p>
            <div className="d-flex justify-content-center my-5">
              <Button
                className="botonContacto d-flex mt-4 align-items-center "
                style={{ padding: "10px 20px", fontSize: "1rem" }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfizlU9fhXs8sOKLK6qEchq6_ZMoU60SRgzVztdEmadxpg7xg/viewform?usp=sf_link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                  className="me-2"
                >
                  <path
                    fill="#fff"
                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                  ></path>
                </svg>
                <span>Agenda tu Cita</span>
              </Button>
            </div>
          </Col>

          <Col xs={12} lg={6} className="my-5">
            <img
              src={Bienvenida}
              alt="Clínica Dental Salud & Sonrisa"
              className="img-fluid w-100 rounded"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
      <section id="servicios">
        <Servicios></Servicios>
      </section>
      <section id="nosotros">
        <Sobrenosotros></Sobrenosotros>
      </section>
      <Ubicacion></Ubicacion>
      <section id="contacto">
        <Contacto></Contacto>
      </section>
    </section>
  );
};

export default PaginaPrincipal;
