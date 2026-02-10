import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // auth falsa
    localStorage.setItem("isAuth", "true");

    navigate("/home");
  };

  return (
    <section style={{ maxWidth: "400px" }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" placeholder="Email" />
        </div>

        <div>
          <input type="password" placeholder="Contraseña" />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </section>
  );
};

export default Login;
