import { Button, Card, Col, Container, Row } from "react-bootstrap";
import limpiezadental from "../../img/limpieza.jpg";
import ortodoncia from "../../img/ortodoncia.jpg";
import carilla from "../../img/carillas.jpg";
import ninos from "../../img/odontninos.jpg";
import implantes from "../../img/implantes.webp";
import extraccion from "../../img/extraccion.jpg";

const Servicios = () => {
  return (
    <section className="seccionServicios p-5" id="servicios">
      <h5 className="text-center fs-3 mt-4">Servicios</h5>
      <h2 className="text-center text-light mb-5">Conoce nuestros servicios</h2>
      <section>
        <Row className="g-4">
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={limpiezadental} />
              <Card.Body>
                <Card.Title>Limpiezas Dentales Profesionales</Card.Title>
                <Card.Text>
                  Servicios de limpieza y pulido dental para mantener una buena
                  higiene y prevenir caries.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={ortodoncia} />
              <Card.Body>
                <Card.Title>Ortodoncia</Card.Title>
                <Card.Text>
                  Servicios de brackets y alineadores transparentes para
                  corregir la alineación de los dientes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={extraccion} />
              <Card.Body>
                <Card.Title>Extracción de Dientes</Card.Title>
                <Card.Text>
                  Extracción segura y sin dolor de dientes dañados o
                  problemáticos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={carilla} />
              <Card.Body>
                <Card.Title>Odontología Estética</Card.Title>
                <Card.Text>
                  Carillas, remodelado y otros tratamientos para mejorar la
                  apariencia de los dientes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={implantes} />
              <Card.Body>
                <Card.Title>Implantes Dentales</Card.Title>
                <Card.Text>
                  Reemplazo de dientes perdidos con implantes que funcionan y se
                  ven como dientes naturales.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="h-100">
              <Card.Img variant="top" src={ninos} />
              <Card.Body>
                <Card.Title>Odontología Preventiva para Niños</Card.Title>
                <Card.Text>
                  Servicios especializados en el cuidado dental para niños.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </section>
  );
};

export default Servicios;
