// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { salesOfTheWeek } from "../../services/DashboardServices";

const BarChart = () => {
  const [priceSalesOfTheWeek, setPriceSalesOfTheWeek] = useState([
    0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    const fetchSalesOfTheWeek = async () => {
      try {
        const response = await salesOfTheWeek();

        let daySales = {
          lunes: 0,
          martes: 0,
          miercoles: 0,
          jueves: 0,
          viernes: 0,
          sabado: 0,
          domingo: 0,
        };

        const convertDateOfResponseToDay = response.map((sale) => {
          const date = new Date(sale[0]).toLocaleDateString("es-CO", {
            weekday: "long",
          });
          return { ...sale, dayOfWeek: date };
        });

        // Agrupa y suma las ventas por día de la semana
        convertDateOfResponseToDay.forEach((sale) => {
          switch (sale.dayOfWeek) {
            case "lunes":
              daySales.lunes += sale[1];
              break;
            case "martes":
              daySales.martes += sale[1];
              break;
            case "miércoles":
              daySales.miercoles += sale[1];
              break;
            case "jueves":
              daySales.jueves += sale[1];
              break;
            case "viernes":
              daySales.viernes += sale[1];
              break;
            case "sábado":
              daySales.sabado += sale[1];
              break;
            case "domingo":
              daySales.domingo += sale[1];
              break;
            default:
              break;
          }
        });

        setPriceSalesOfTheWeek(daySales);
      } catch (error) {
        console.error("Error trayendo los 5 mejores destinos", error);
      }
    };

    fetchSalesOfTheWeek();
  }, []);

  return (
    <Bar
      data={{
        labels: [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo",
        ],
        datasets: [
          {
            label: "Ventas",
            data: [
              priceSalesOfTheWeek.lunes,
              priceSalesOfTheWeek.martes,
              priceSalesOfTheWeek.miercoles,
              priceSalesOfTheWeek.jueves,
              priceSalesOfTheWeek.viernes,
              priceSalesOfTheWeek.sabado,
              priceSalesOfTheWeek.domingo,
            ],
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Ventas de la semana",
            align: "start",
            font: {
              weight: "800",
              size: 18,
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
