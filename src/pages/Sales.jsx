import { useEffect, useState } from "react";
import { searchClient } from "../services/searchClient";
import allDestinations from "../services/allDestinations";

function Sales() {
  const [errors, setErrors] = useState("");
  const [valid, setValid] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [date, setDate] = useState("");
  const [dataClient, setDataClient] = useState({
    card_number: "",
    name: "",
    lastname: "",
    phone_number: "",
    address: "",
    email: "",
  });

  const handleChangeDataClient = async (e) => {
    if(e.target.value == "") {
      setErrors("El campo cédula no puede estar vacío");
      return;
    }
    const responseClient = await searchClient(
      e.target.value,
      setErrors,
      setValid
    );
    if (responseClient) {
      setDataClient({
        card_number: responseClient.card_number,
        name: responseClient.name,
        lastname: responseClient.lastname,
        phone_number: responseClient.phone_number,
        address: responseClient.address,
        email: responseClient.email,
        date: date,
      });
    } else {
      setDataClient({
        card_number: "",
        name: "",
        lastname: "",
        phone_number: "",
        address: "",
        email: "",
      });
    }
  };

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await allDestinations();
        setDestinations(response);
      } catch (error) {
        setErrors("Ocurrió un error al cargar los destinos");
      }
    };
    fetchDestinations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataClient((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleDestinationSelected = (destination) => {
    setSelectedDestination(destination);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataClient);
  };

  return (
    <section>
      <h1 className="text-3xl font-semibold">Reservas - Ventas</h1>
      <section className="mt-5 w-full">
        <article>
          <form
            action="POST"
            onSubmit={handleSubmit}
            className="w-full p-6 bg-white shadow-md rounded-md flex flex-wrap gap-2"
          >
            <div className="mb-4 flex flex-wrap">
              <label
                htmlFor="card_number"
                className="block text-gray-700 font-medium mb-2"
              >
                Cédula
              </label>
              <input
                id="card_number"
                type="number"
                name="card_number"
                placeholder="Cédula"
                onChange={handleChangeDataClient}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Nombre"
                value={dataClient.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastname"
                className="block text-gray-700 font-medium mb-2"
              >
                Apellido
              </label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Apellido"
                value={dataClient.lastname}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone_number"
                className="block text-gray-700 font-medium mb-2"
              >
                Número de Teléfono
              </label>
              <input
                id="phone_number"
                type="text"
                name="phone_number"
                placeholder="Número de Teléfono"
                value={dataClient.phone_number}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-medium mb-2"
              >
                Dirección
              </label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Dirección"
                value={dataClient.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={dataClient.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-gray-700 font-medium mb-2"
              >
                Fecha
              </label>
              <input
                id="date"
                type="date"
                name="date"
                placeholder="Elige la fecha"
                onChange={handleDate}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </form>
        </article>
        <article className="w-full mt-5">
          {selectedDestination && (
            <section className="mb-5">
              <h1 className="text-2xl mb-5">Destino Seleccionado</h1>
              <div className="bg-white shadow-md rounded-md p-4 h-80 max-h-96 w-52">
                <div className="h-full flex justify-between flex-col">
                  <img
                    src={selectedDestination.image}
                    alt={"Imagen del plan " + selectedDestination.description}
                    className="w-full h-28"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {selectedDestination.country}, {selectedDestination.city}.
                    </h3>
                    <p className="text-sm font-semibold">
                      Precio: ${selectedDestination.price} COP
                    </p>
                  </div>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded-md"
                    onClick={() => setSelectedDestination(null)}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </section>
          )}
          <h2 className="text-2xl mb-5">Destinos</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white shadow-md rounded-md p-4 h-80 max-h-96 w-52"
              >
                <div className="h-full flex justify-between flex-col">
                  <img
                    src={destination.image}
                    alt={"Imagen del plan " + destination.description}
                    className="w-full h-28"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {destination.country}, {destination.city}.
                    </h3>
                    <p className="text-sm font-semibold">
                      Precio: ${destination.price} COP
                    </p>
                  </div>
                  <button
                    className="bg-[--var-dark-shades] text-white px-4 py-1 rounded-md"
                    onClick={() => handleDestinationSelected(destination)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
      {errors && (
        <p className="fixed font-bold right-0 bottom-0 bg-red-500 px-4 py-2 mb-5 mr-5 text-white rounded-lg">
          {errors}
        </p>
      )}
      {valid && (
        <p className="fixed font-bold right-0 bottom-0 bg-green-500 px-4 py-2 mb-5 mr-5 text-white rounded-lg">
          {valid}
        </p>
      )}
    </section>
  );
}

export default Sales;
