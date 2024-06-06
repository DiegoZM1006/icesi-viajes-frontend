import { useEffect, useState } from "react";
import IconSales from "../Icons/Sales";
import PropTypes from "prop-types";
import { getSalesBySeller } from "../../services/getSalesByUser";

function ButtonModalSeller(props) {
  const [showModal, setShowModal] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [countSales, setCountSales] = useState(0);

  useEffect(() => {
    if (showModal) {
      const fetchDestinationsByUser = async () => {
        try {
          const response = await getSalesBySeller(props.id);
          setTotalSales(response.reduce((acc, curr) => acc + curr[2], 0));
          setCountSales(response.length);
          setDestinations(response);
        } catch (error) {
          console.log(error);
        }
      };
      fetchDestinationsByUser();
    }
  }, [props.id, showModal]);

  return (
    <>
      <button
        className="bg-emerald-500 text-white p-2 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <IconSales />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto min-w-[600px] my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[--var-white] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-6 border-b border-solid border-blueGray-200 rounded-b">
                  <h3 className="text-3xl font-semibold">Lista de ventas</h3>
                </div>
                {/*body*/}
                <article className="relative flex flex-col flex-auto items-center p-5 gap-5 max-h-[200px] overflow-y-auto">
                  {destinations.length > 0 ? (
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="text-left">Destino</th>
                          <th className="text-left">Fecha</th>
                          <th className="text-left">Valor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {destinations.map((destination, index) => (
                          <tr key={index}>
                            <td>{destination[0]}</td>
                            <td>{destination[1]}</td>
                            <td>{destination[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-2xl text-center">No hay ventas</p>
                  )}
                </article>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <div>
                    <p className="text-lg">Ventas : {countSales}</p>
                    <p className="text-lg">
                      Valor total ventas: $ {totalSales} COP
                    </p>
                  </div>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

ButtonModalSeller.propTypes = {
  id: PropTypes.number,
};

export default ButtonModalSeller;
