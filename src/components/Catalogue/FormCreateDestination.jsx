import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import uploadImageCloudinary from "../../services/uploadImageCloudinary";
import { addDestination } from "../../services/addDestination";

function Form(props) {
  const [valid, setValid] = useState();
  const [errors, setErrors] = useState();
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (valid) {
      const timer = setTimeout(() => {
        window.location.href = "/catalogue";
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [valid]);

  const handleFileChange = (event) => {
    event.preventDefault();

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleAddDestination = async (event) => {
    event.preventDefault();

    const image_prev = event.target.input_file.files[0];

    if (!image_prev) {
      setErrors("Debes seleccionar una imagen");
      return;
    }

    const [status, img_reponse] = await uploadImageCloudinary(image_prev);

    if (!status) {
      setErrors("Error al subir la imagen");
      return;
    }

    const description = event.target.description.value;
    const information = event.target.more_info.value;
    const country = event.target.country.value;
    const city = event.target.city.value;
    const days = event.target.days.value;
    const nights = event.target.nights.value;
    const price = event.target.price.value;
    const name = event.target.name.value;
    const hotel = event.target.hotel.value;
    const tickets = event.target.tickets.value;
    const image = img_reponse.secure_url;

    const data = {
      name,
      description,
      information,
      country,
      city,
      days,
      nights,
      price,
      hotel,
      tickets,
      image,
    };

    await addDestination(data, setErrors, setValid);
  };

  return (
    <form
      className="[box-shadow:rgba(0,_0,_0,_0.16)_0px_3px_6px,_rgba(0,_0,_0,_0.23)_0px_3px_6px] h-full bg-[--var-light] flex gap-6 p-5 rounded-lg"
      onSubmit={handleAddDestination}
    >
      <section className="flex flex-col gap-3">
        <label htmlFor="input_file" id="drop-area" className="flex-grow">
          <input
            type="file"
            id="input_file"
            name="input_file"
            accept=".jpg"
            hidden
            onChange={handleFileChange}
          />
          <div
            className="img-view w-[365px] h-full min-h-[365px] border-2 border-black border-dashed rounded-2xl flex justify-center items-center flex-col gap-3 bg-gray-100 transition-all duration-200 ease-linear bg-cover"
            style={{ backgroundImage: `url(${imagePreview})` }}
          >
            {imagePreview ? (
              <p className="text-white bg-black bg-opacity-50 p-2 rounded-md">
                Imagen cargada
              </p>
            ) : (
              <p className="text-black">
                Arrastra una imagen o haz click para seleccionar
              </p>
            )}
          </div>
        </label>
        <button
          type="button"
          className="px-3 py-2 bg-[--var-dark] text-white rounded-md"
          onClick={() => setImagePreview(null)}
        >
          Borrar imagen
        </button>
        <div>
          <label htmlFor="description">Descripción</label>
          <textarea
            value={props.description}
            type="text"
            id="description"
            name="description"
            placeholder="Escribe una descripción del destino"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="more_info">+ Informacion</label>
          <textarea
            value={props.information}
            type="text"
            id="more_info"
            name="more_info"
            placeholder="Escribe informacion adicional de lo que tenga el destino"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </section>
      <section className="flex flex-col gap-2 justify-center">
        <h2 className="font-medium">Ubicación</h2>
        <div className="flex flex-row gap-2">
          <div className="flex-1">
            <label htmlFor="country">País</label>
            <input
              value={props.country}
              type="text"
              id="country"
              name="country"
              placeholder="Escribe el país"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="city">Ciudad</label>
            <input
              value={props.city}
              type="text"
              id="city"
              name="city"
              placeholder="Escribe la ciudad"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <h2 className="font-medium">Hospedaje</h2>
        <div className="flex flex-row gap-2">
          <div className="flex-1">
            <label htmlFor="days">Dia(s)</label>
            <input
              value={props.days}
              type="number"
              id="days"
              name="days"
              placeholder="Escribe los dias de hospedaje"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
              min={0}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="nights">Noche(s)</label>
            <input
              value={props.nights}
              type="text"
              id="nights"
              name="nights"
              placeholder="Escribe las noches de hospedaje"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
              min={0}
            />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex-1">
            <label htmlFor="tickets">Tickets de avion</label>
            <select
              name="tickets"
              id="tickets"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            >
              <option value="ida-vuelta">Ida y Vuelta</option>
              <option value="ida">Solo ida</option>
              <option value="none">No incluye</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="price">Precio</label>
            <input
              value={props.price}
              type="number"
              id="price"
              name="price"
              placeholder="Escribe el precio x persona"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
              min={0}
            />
          </div>
        </div>
        <div>
          <label htmlFor="name">Nombre destino</label>
          <input
            value={props.name}
            type="text"
            id="name"
            name="name"
            placeholder="Escribe el nombre del destino"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="hotel">Hotel</label>
          <input
            value={props.hotel}
            type="text"
            id="hotel"
            name="hotel"
            placeholder="Escribe el nombre del hotel"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex gap-5 w-full mt-5">
          <Link
            className="flex flex-grow justify-center px-3 py-2 bg-[--var-danger] text-white rounded-md"
            to="/catalogue"
          >
            Volver
          </Link>
          <button
            type="submit"
            className="flex-grow px-3 py-2 bg-[--var-success] text-white rounded-md"
          >
            Crear
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
      </section>
    </form>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  information: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
  days: PropTypes.number,
  nights: PropTypes.number,
  price: PropTypes.number,
  hotel: PropTypes.string,
};

export default Form;
