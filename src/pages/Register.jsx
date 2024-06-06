import "../index.css";
import image from "../assets/image-login.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../services/register";

function Register() {
  const [erros, setErrors] = useState();
  const [valid, setValid] = useState();

  const handleRegister = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const lastname = event.target.lastname.value;
    const email = event.target.email.value;
    const phone_number = event.target.phone_number.value;
    const card_number = event.target.card_number.value;
    const address = event.target.address.value;
    const username = event.target.username.value;
    const password = event.target.password.value;

    const data = {
      name,
      lastname,
      email,
      phone_number,
      card_number,
      address,
      username,
      password,
    };

    const response = await register(data, setErrors, setValid);

    if (response) {
      window.location.href = "/";
    }
  };

  return (
    <main
      className="w-full h-screen bg-[--var-light] flex justify-center items-center p-4 bg-cover"
      style={{ backgroundImage: "url(" + image + ")" }}
    >
      <article className="flex flex-col justify-center items-center w-[450px] p-5 rounded-xl bg-white/80 backdrop-blur-sm">
        <div className="flex flex-col gap-6 max-w-[500px]">
          <h1 className="text-4xl font-bold flex gap-5 justify-center">
            Registrate <span className="animate-bounce block">🙂</span>
          </h1>
          <h3>Por favor ingresa la información para tu cuenta.</h3>
          <form
            onSubmit={handleRegister}
            method="POST"
            className="flex flex-col gap-2"
          >
            <div className="flex flex-row gap-2">
              <div className="flex-1">
                <label htmlFor="name">Nombre(s)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingresa su(s) nombre(s)"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastname">Apellido(s)</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Ingresa su(s) apellido(s)"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="phone_number">Telefono celular</label>
                <input
                  type="number"
                  id="phone_number"
                  name="phone_number"
                  placeholder="Ingresa su telefono"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="card_number">Cedula</label>
                <input
                  type="number"
                  id="card_number"
                  name="card_number"
                  placeholder="Ingresa su cedula"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa su correo electronico"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Ingresa su correo electronico"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Ingresa su usuario"
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
                placeholder="Ingresa su contraseña"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-3 mb-3 rounded-md bg-[--var-dark-shades] text-[--var-light] hover:bg-[--var-hover-dark-shades]"
            >
              Registrarse
            </button>
            {erros && (
              <p className="font-bold right-0 bottom-0 w-full bg-red-500 px-4 py-2 mr-5 text-white rounded-lg">
                {erros}
              </p>
            )}
            {valid && (
              <p className="font-bold right-0 bottom-0 w-full bg-green-500 px-4 py-2 mr-5 text-white rounded-lg">
                {valid}
              </p>
            )}
          </form>
          <p className="w-full text-end">
            ¿Ya tienes una cuenta?
            <Link to="/">
              {" "}
              <span className="und underline text-[--var-dark-shades]">
                ingresa
              </span>
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}

export default Register;
