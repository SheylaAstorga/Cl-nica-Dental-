import { Card, Col, Container, Row } from "react-bootstrap";
import sobremi from "../../img/Sobrenosotros.jpg";

const Sobrenosotros = () => {
  return (
    <Container className="my-5 py-5  rounded shadow">
      <Row className="align-items-center">
        <Col md={12} lg={6} className="text-center mb-md-5 mb-lg-0 mb-5 ">
          <img
            src={sobremi}
            alt="Sobre nosotros"
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Col>

        <Col md={12} lg={6} className="p-md-4 p-lg-0">
          <Card className="border-0">
            <Card.Body>
              <h5 className="text-primary text-center">Sobre Nosotros</h5>
              <h2 className="mb-5 text-center">Conoce a nuestro equipo y nuestra misión</h2>
              <p>
                En <strong>Clínica Dental Salud & Sonrisa</strong>, estamos
                comprometidos con ofrecer un servicio dental de alta calidad en
                un ambiente acogedor y profesional. Con años de experiencia y un
                equipo de especialistas, nos esforzamos por cuidar de cada
                sonrisa y mejorar la calidad de vida de nuestros pacientes.
              </p>
              <p>
                Nuestro objetivo es brindar atención personalizada, utilizando
                tecnología avanzada y técnicas innovadoras que garanticen
                resultados duraderos. ¡Te invitamos a conocernos y descubrir
                cómo podemos ayudarte a lograr una sonrisa saludable!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Sobrenosotros;
