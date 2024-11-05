import { Container, Navbar,Nav } from "react-bootstrap";
import logoPrincipal from "../../img/logo.png";

const NavPrincipal = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav.Link href="#home"><img src={logoPrincipal} alt="logo salud y sonrisa"  className="logoPrincipal"/></Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Servicios</Nav.Link>
              <Nav.Link href="#link">Sobre mí</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavPrincipal;
