import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";
import logoPrincipal from "../../img/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavPrincipal = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logoPrincipal}
              alt="logo salud y sonrisa"
              className="logoPrincipal"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto  fs-5">
              <NavLink className="nav-link" To="/">
                Inicio
              </NavLink>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#nosotros">Sobre nosotros</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavPrincipal;
