import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import error404 from "../../img/error404.png";

function Error404() {
  const navigate = useNavigate();

  return (
    <Container className="text-center d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="display-1 text-primary mb-3">404</h1>
      <h2 className="mb-4">¡Oops! Página no encontrada</h2>
      <p className="text-muted mb-5">
        Parece que la página que estás buscando no existe. Quizás puedas
        encontrar lo que necesitas en nuestra página principal.
      </p>
      <img
        src={error404} 
        alt="Página no encontrada"
        className="img-fluid mb-5 justify-content-center"
        style={{ maxWidth: "200px" }}
      />
      <div className="text-center">
        <Button
          onClick={() => navigate("/")}
          variant="primary"
          className="px-4"
        >
          Volver al inicio
        </Button>
      </div>
    </Container>
  );
}

export default Error404;
