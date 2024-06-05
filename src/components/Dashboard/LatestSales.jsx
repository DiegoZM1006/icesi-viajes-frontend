import { useState, useEffect } from "react";
import { latestSales } from "../../services/DashboardServices";

const LatestSales = () => {

    const [arrLatestSales, setArrLatestSales] = useState([])

    useEffect(() => {
        const fetchLatestSales = async () => {
            try {
                const data = await latestSales();
                setArrLatestSales(data);
            } catch (error) {
                console.error("Error trayendo las ultimas ventas", error);
            }
        };

        fetchLatestSales();
    }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mt-5">Ultimas ventas</h2>
      <p className="text-lg text-gray-500">
        Aquí puedes ver las ventas de la semana
      </p>
      <article>
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Agente
              </th>
              <th scope="col" className="px-6 py-4">
                Cliente
              </th>
              <th scope="col" className="px-6 py-4">
                Destino
              </th>
              <th scope="col" className="px-6 py-4">
                Fecha
              </th>
              <th scope="col" className="px-6 py-4">
                Valor
              </th>
            </tr>
          </thead>
          <tbody>
            {arrLatestSales.map((sale, index) => (
              <tr key={index} className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4">{sale[0]}</td>
                <td className="whitespace-nowrap px-6 py-4">{sale[1]}</td>
                <td className="whitespace-nowrap px-6 py-4">{sale[2]}</td>
                <td className="whitespace-nowrap px-6 py-4">{sale[3]}</td>
                <td className="whitespace-nowrap px-6 py-4">$ {sale[4]} COP</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </div>
  );
};

export default LatestSales;
