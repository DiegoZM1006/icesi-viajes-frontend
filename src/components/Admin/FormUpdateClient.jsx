import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { updateClient } from "../../services/updateClient";

function FormUpdateClient(props) {
  const [valid, setValid] = useState();
  const [errors, setErrors] = useState();

  useEffect(() => {
    if (valid) {
      const timer = setTimeout(() => {
        window.location.href = "/clients";
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [valid]);

  const [formData, setFormData] = useState({
    name: props.name,
    lastname: props.lastname,
    phone_number: props.phone_number,
    id_card: props.id_card,
    email: props.email,
    address: props.address,
    user: props.user,
    password: props.password,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddClient = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const lastname = event.target.lastname.value;
    const email = event.target.email.value;
    const phone_number = event.target.phone_number.value;
    const card_number = event.target.card_number.value;
    const address = event.target.address.value;
    const username = event.target.username.value;

    const data = {
      name,
      lastname,
      email,
      phone_number,
      card_number,
      address,
      username,
    };
    await updateClient(props.id, data, setErrors, setValid);
  };

  return (
    <form
      onSubmit={handleAddClient}
      className="[box-shadow:rgba(0,_0,_0,_0.16)_0px_3px_6px,_rgba(0,_0,_0,_0.23)_0px_3px_6px] h-full bg-[--var-light] flex flex-col gap-6 p-5 rounded-lg max-w-[450px]"
      action="POST"
    >
      <div className="flex flex-row gap-2">
        <div className="flex-1">
          <label htmlFor="name">Nombre(s)</label>
          <input
            value={formData.name}
            type="text"
            id="name"
            name="name"
            placeholder="Escribe el nombre"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastname">Apellido(s)</label>
          <input
            value={formData.lastname}
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Escribe el apellido"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex-1">
          <label htmlFor="phone_number">Telefono celular</label>
          <input
            value={formData.phone_number}
            type="number"
            id="phone_number"
            name="phone_number"
            placeholder="Escribe el telefono"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="card_number">Cedula</label>
          <input
            value={formData.id_card}
            type="number"
            id="card_number"
            name="card_number"
            placeholder="Escribe la cedula"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="flex-1">
        <label htmlFor="email">Correo electronico</label>
        <input
          value={formData.email}
          type="email"
          id="email"
          name="email"
          placeholder="Escribe el email"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Dirección</label>
        <input
          value={formData.address}
          type="text"
          id="address"
          name="address"
          placeholder="Escribe la dirección"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="username">Usuario</label>
        <input
          value={formData.user}
          type="text"
          id="username"
          name="username"
          placeholder="Escribe el usuario"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
          required
        />
      </div>
      {/* <div>
        <label htmlFor="password">Contraseña</label>
        <input
          value={formData.password}
          type="password"
          id="password"
          name="password"
          placeholder="Escribe la contraseña"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
          required
        />
      </div> */}
      <div className="flex gap-5 w-full mt-5">
        <Link
          className="flex flex-grow justify-center px-3 py-2 bg-[--var-danger] text-white rounded-md"
          to="/clients"
        >
          Volver
        </Link>
        <button
          type="submit"
          className="flex-grow px-3 py-2 bg-[--var-success] text-white rounded-md"
        >
          Modificar
        </button>
      </div>
      {errors && (
        <p className="font-bold right-0 bottom-0 w-full bg-red-500 px-4 py-2 text-white rounded-lg">
          {errors}
        </p>
      )}
      {valid && (
        <p className="font-bold right-0 bottom-0 w-full bg-green-500 px-4 py-2 text-white rounded-lg">
          {valid}
        </p>
      )}
    </form>
  );
}

FormUpdateClient.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  phone_number: PropTypes.string,
  id_card: PropTypes.string,
  address: PropTypes.string,
  user: PropTypes.string,
  password: PropTypes.string,
};

export default FormUpdateClient;
