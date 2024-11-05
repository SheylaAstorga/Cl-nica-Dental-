import { Container, Row, Col, Button } from "react-bootstrap";
import Bienvenida from "../../img/sonrisa.png";

const PaginaPrincipal = () => {
  return (
    <section>
      <Row className="d-flex flex-column flex-lg-row align-items-center">
        <Col xs={12} md={6} className="px-md-3 px-lg-5">
          <h5 className="">Sea Bienvenido</h5>
          <h1 className="ms-md-3 ">Clínica Dental Salud & Sonrisa</h1>
          <p className="ms-md-3">
            Ofrecemos una variedad de servicios odontológicos para cuidar y
            mejorar tu sonrisa.Nuestro equipo de profesionales está aquí para
            ayudarte a mantener una salud dental óptima.
          </p>
          <p className="ms-md-3">
            ¡Agenda tu consulta hoy mismo y descubre cómo una sonrisa saludable
            puede cambiar tu vida!
          </p>
          <div className="d-flex justify-content-center">
            <Button className="botonContacto d-flex mt-5 ms-md-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fff"
                  d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                ></path>
              </svg>
              <span className="ms-2">Agenda tu Cita</span>
            </Button>
          </div>
        </Col>

        <Col xs={12} md={6} >
          <img
            src={Bienvenida}
            alt="Clínica Dental Salud & Sonrisa"
            className="img-fluid w-100 "
            style={{ borderRadius: "0 0 10px 10px" }}
          />
        </Col>
      </Row>
    </section>
  );
};

export default PaginaPrincipal;
