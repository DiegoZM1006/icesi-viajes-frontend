import { useState, useEffect } from "react";
import { topFiveSellers } from "../../services/DashboardServices";

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const data = await topFiveSellers();
        setBestSellers(data);
      } catch (error) {
        console.error("Error trayendo los mejores vendedores", error);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mt-5">Mejores agentes</h2>
      <p className="text-lg text-gray-500">
        Aquí puedes ver los mejores agentes de la empresa
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
                # Ventas
              </th>
              <th scope="col" className="px-6 py-4">
                Valor
              </th>
            </tr>
          </thead>
          <tbody>
            {bestSellers.map((seller, index) => (
              <tr key={index} className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4">{seller[0]}</td>
                <td className="whitespace-nowrap px-6 py-4">{seller[1]}</td>
                <td className="whitespace-nowrap px-6 py-4">$ {seller[2]} COP</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </div>
  );
};

export default BestSellers;
