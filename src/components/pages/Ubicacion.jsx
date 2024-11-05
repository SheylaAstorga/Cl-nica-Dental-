import { Container, Row, Col, Card } from "react-bootstrap";

function Ubicacion() {
  return (
    <Container fluid className="my-5 py-5 bg-light text-center rounded shadow">
      <h5 className="text-primary fs-3"></h5>
      <h2 className="mb-4">Nuestra Ubicación</h2>

      <Row className="align-items-center justify-content-center">
        <Col md={4} className="mb-4 me-lg-5">
          <Card className="border-0 bg-transparent">
            <Card.Body>
              <h4>Clínica Dental Salud & Sonrisa</h4>
              <hr />
              <p className="fs-5">
                Avenida Siempre Viva 123, Piso 2 <br />
                Ciudad Dental, Buenos Aires <br />
                Argentina
              </p>
              <p className="text-muted">
                Horario de atención:Lunes a Viernes, 9:00 AM - 6:00 PM <br />
                Teléfono: +54 123 456 789
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8} lg={6}>
          <div className="embed-responsive embed-responsive-16by9 rounded shadow">
            <iframe
              title="Ubicación de la Clínica Dental"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537353155047!3d-37.81627917975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773b02145f7fe1!2sAvenida%20Siempre%20Viva%20123!5e0!3m2!1ses-419!2sar!4v1600000000000!5m2!1ses-419!2sar"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Ubicacion;
