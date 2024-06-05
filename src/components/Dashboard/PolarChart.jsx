// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import { PolarArea } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { topFiveDestinations } from "../../services/DashboardServices";

const PolarChart = () => {

    const [fiveDestinations, setFiveDestinations] = useState([]);

    useEffect(() => {
        const fetchTopFiveDestinations = async () => {
          try {
            const response = await topFiveDestinations();
            setFiveDestinations(response);
          } catch (error) {
            console.error("Error trayendo los 5 mejores destinos", error);
          }
        };
    
        fetchTopFiveDestinations();
      }, []);

    return (
        <PolarArea
            data={{
              labels: fiveDestinations.map((destination) => destination[0]),
              datasets: [
                {
                  label: "Ventas",
                  data: fiveDestinations.map((destination) => destination[1]),
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(75, 192, 192)",
                    "rgb(255, 205, 86)",
                    "rgb(201, 203, 207)",
                    "rgb(54, 162, 235)",
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Mejores destinos",
                  align: "start",
                  font: {
                    weight: "800",
                    size: 18,
                  },
                },
                legend: {
                  labels: {
                    usePointStyle: true,
                  },
                },
              },
            }}
          />
    )
}

export default PolarChart;