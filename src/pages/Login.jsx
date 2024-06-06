import "../index.css";
import image from "../assets/image-login.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/login";

function Login() {
  const [erros, setErrors] = useState();

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    setErrors(await login(username, password));
  };

  return (
    <main className="w-full h-screen bg-[--var-light] flex justify-center items-center p-4 bg-cover" style={{backgroundImage: 'url(' + image + ')'}}>
      <article className="flex flex-col justify-center items-center w-[400px] p-5 rounded-xl bg-white/80 backdrop-blur-sm">
        <div className="flex flex-col gap-6 w-full max-w-[500px]">
          <h1 className="text-4xl font-bold flex gap-5 justify-center">¡Bienvenido! <span className="animate-bounce block">👋</span></h1>
          <h3>Por favor ingresa la información de tu cuenta.</h3>
          <form
            onSubmit={handleLogin}
            method="POST"
            className="flex flex-col gap-6"
          >
            <div>
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Ingresa tu usuario"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu usuario"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-[--var-dark-shades] text-[--var-light] hover:bg-[--var-hover-dark-shades]"
            >
              Iniciar sesión
            </button>
          </form>
          {erros && <p className="text-red-600">{erros}</p>}
          <p className="w-full text-end">
            ¿No tienes cuenta?
            <Link to="/register">
              {" "}
              <span className="und underline text-[--var-dark-shades]">
                registrate
              </span>
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}

export default Login;
