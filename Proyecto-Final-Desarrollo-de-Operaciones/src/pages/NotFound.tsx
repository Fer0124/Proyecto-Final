import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>404</h1>
      <p>Página no encontrada</p>

      <Link to="/">Volver al inicio</Link>
    </section>
  );
};

export default NotFound;
