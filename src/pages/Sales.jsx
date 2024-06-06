import { useEffect, useState } from "react";
import { searchClient } from "../services/searchClient";
import allDestinations from "../services/allDestinations";
import { addReservation } from "../services/addReservation";

function Sales() {
  const [errors, setErrors] = useState("");
  const [valid, setValid] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState([]);
  const [dataClient, setDataClient] = useState({
    card_number: "",
    name: "",
    lastname: "",
    phone_number: "",
    address: "",
    email: "",
    date: "",
  });

  const handleChangeDataClient = async (e) => {
    if (e.target.value == "") {
      setErrors("El campo cédula no puede estar vacío");
      setDataClient({
        card_number: e.target.value,
        name: "",
        lastname: "",
        phone_number: "",
        address: "",
        email: "",
        date: new Date(),
      });
      return;
    }
    const responseClient = await searchClient(
      e.target.value,
      setErrors,
      setValid
    );
    if (responseClient) {
      setDataClient({
        id: responseClient.id,
        card_number: responseClient.card_number,
        name: responseClient.name,
        lastname: responseClient.lastname,
        phone_number: responseClient.phone_number,
        address: responseClient.address,
        email: responseClient.email,
        date: new Date(),
        useranme: responseClient.username,
        password: responseClient.password,
      });
    } else {
      setDataClient({
        card_number: e.target.value,
        name: "",
        lastname: "",
        phone_number: "",
        address: "",
        email: "",
        date: new Date(),
      });
    }
  };

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    if (valid) {
      const timer = setTimeout(() => {
        setValid(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [valid]);

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

  const removeDestination = (destinationToRemove) => {
    const newDestinations = selectedDestination.filter(
      (destination) => destination.id !== destinationToRemove.id
    );
    setDestinations([...destinations, destinationToRemove]);
    setSelectedDestination(newDestinations);
    setErrors("Destino eliminado");
  };

  const handleDestinationSelected = (destination) => {
    const newDestinationsToAdd = [...selectedDestination, destination];
    const newDestinationsToDelete = destinations.filter(
      (destination) => !newDestinationsToAdd.includes(destination)
    );

    setDestinations(newDestinationsToDelete);
    setSelectedDestination(newDestinationsToAdd);
    setValid("Destino agregado");
  };

  console.log();

  const handleAddDateToDestination = (e, idDestination) => {
    const newSelectedDestination = selectedDestination.map((destination) => {
      if (destination.id === idDestination) {
        return {
          ...destination,
          reservation_date: e.target.value,
        };
      }
      return destination;
    });

    setSelectedDestination(newSelectedDestination);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidate = Object.values(dataClient).every((value) => value !== "");
    if (!isValidate) {
      setErrors("Todos los campos son obligatorios");
      return;
    } else if (selectedDestination.length === 0) {
      setErrors("Debes seleccionar al menos un destino");
      return;
    } else if (
      selectedDestination.some((destination) => !destination.reservation_date)
    ) {
      setErrors("Debes seleccionar una fecha para todos los destinos");
      return;
    }

    // console.log(selectedDestination);
    const response = await addReservation(
      dataClient,
      selectedDestination,
      setErrors,
      setValid
    );

    if (response) {
      setValid("Reserva realizada con éxito");
      setDataClient({
        card_number: "",
        name: "",
        lastname: "",
        phone_number: "",
        address: "",
        email: "",
        date: "",
      });
      setDestinations([...destinations, ...selectedDestination]);
      setSelectedDestination([]);
    }
  };

  return (
    <section>
      <h1 className="text-3xl font-semibold">Reservas - Ventas</h1>
      <section className="mt-5 w-full">
        <article>
          <form
            action="POST"
            onSubmit={handleSubmit}
            className="w-full p-6 bg-white shadow-md rounded-md flex flex-wrap gap-2 justify-stretch max-w-[1000px]
          mx-auto"
          >
            <div>
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
            <div>
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
                disabled
              />
            </div>
            <div>
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
                disabled
              />
            </div>
            <div>
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
                disabled
              />
            </div>
            <div>
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
                disabled
              />
            </div>
            <div>
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
                disabled
              />
            </div>
            {/* <div>
              <label
                htmlFor="date"
                className="block text-gray-700 font-medium mb-2"
              >
                Fecha
              </label>
              <input
                id="date"
                type="datetime-local"
                name="date"
                placeholder="Elige la fecha"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div> */}
            <div className="flex justify-end items-center w-full">
              <input
                id="submit"
                type="submit"
                className="px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-[--var-dark-shades] text-white font-semibold cursor-pointer"
              />
            </div>
          </form>
        </article>
        <article className="w-full mt-5">
          {selectedDestination.length > 0 ? (
            <h2 className="text-2xl mb-5">Destinos Seleccionados</h2>
          ) : null}
          {selectedDestination.length > 0 ? (
            <section className="mb-5 flex gap-3 flex-wrap justify-center">
              {selectedDestination.map((destination) => (
                <div
                  className="bg-white shadow-md rounded-md p-4 h-72 max-h-96 w-60 hover:scale-105 transition-all duration-300 ease-in-out"
                  key={destination.id}
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
                      className="bg-red-500 text-white px-4 py-1 rounded-md"
                      onClick={() => removeDestination(destination)}
                    >
                      Quitar
                    </button>
                    <input
                      onChange={(e) =>
                        handleAddDateToDestination(e, destination.id)
                      }
                      name="reservation_date"
                      id="reservation_date"
                      type="datetime-local"
                    />
                  </div>
                </div>
              ))}
            </section>
          ) : null}
          <h2 className="text-2xl mb-5">Destinos</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white shadow-md rounded-md p-4 h-72 max-h-96 w-52 hover:scale-105 transition-all duration-300 ease-in-out"
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
      <div className="fixed bottom-0 right-0 mb-5 mr-5">
        {errors && (
          <p className="font-bold right-0 bottom-0 bg-red-500 px-4 py-2 mb-5 mr-5 text-white rounded-lg">
            {errors}
          </p>
        )}
        {valid && (
          <p className="font-bold right-0 bottom-0 bg-green-500 px-4 py-2 mb-5 mr-5 text-white rounded-lg">
            {valid}
          </p>
        )}
      </div>
    </section>
  );
}

export default Sales;
