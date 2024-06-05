import CardDashboard from "../components/Sidebar/CardDashboard";
import { Navigate } from "react-router-dom";
import {
  countClients,
  countDestinations,
  countEmployees,
  countSales,
  totalPriceSales,
} from "../services/DashboardServices";
import { useEffect, useState } from "react";
import PolarChart from "../components/Dashboard/PolarChart";
import BarChart from "../components/Dashboard/BarChart";
import BestSellers from "../components/Dashboard/BestSellers";
import LatestSales from "../components/Dashboard/LatestSales";

function Dashboard() {
  const [numberDestinations, setNumberDestinations] = useState(0);
  const [numberEmployees, setNumberEmployees] = useState(0);
  const [numberClients, setNumberClients] = useState(0);
  const [numberSales, setNumberSales] = useState(0);
  const [numberTotalPriceSales, setNumberTotalPriceSales] = useState("0");
  const auth = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const count = await countDestinations();
        setNumberDestinations(count);
      } catch (error) {
        console.error("Error trayendo el contador de destinos", error);
      }
    };

    fetchDestinations();
  }, []);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const count = await countEmployees();
        setNumberEmployees(count);
      } catch (error) {
        console.error("Error trayendo el contador de empleados", error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const count = await countClients();
        setNumberClients(count);
      } catch (error) {
        console.error("Error trayendo el contador de clientes", error);
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const count = await countSales();
        setNumberSales(count);
      } catch (error) {
        console.error("Error trayendo el contador de clientes", error);
      }
    };

    fetchSales();
  }, []);

  useEffect(() => {
    const fetchTotalPriceSales = async () => {
      try {
        const count = await totalPriceSales();

        const formattedPrice = new Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(count);

        setNumberTotalPriceSales(formattedPrice + " COP");
      } catch (error) {
        console.error(
          "Error trayendo el contador del total de precio de ventas",
          error
        );
      }
    };

    fetchTotalPriceSales();
  }, []);

  if (auth) {
    const rol = auth.data.role;
    if (rol !== "ADMIN") {
      return <Navigate to="/catalogue" />;
    }
  } else {
    return <Navigate to="/" />;
  }

  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-3xl font-semibold">Panel de control</h1>
      <section className="flex flex-row gap-5 justify-between">
        <CardDashboard
          number={numberSales}
          secondNumber={numberTotalPriceSales}
          description="Ventas"
          classBtn="bg-[rgba(6,_222,_105,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(6,_222,_105,_0.25)]"
        />
        <CardDashboard
          number={numberClients}
          description="Clientes"
          classBtn="bg-[rgba(222,_214,_6,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(222,_214,_6,_0.25)]"
        />
        <CardDashboard
          number={numberEmployees}
          description="Empleados"
          classBtn="bg-[rgba(49,_171,_210,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(49,_171,_210,_0.25)]"
        />
        <CardDashboard
          number={numberDestinations}
          description="Catálogo"
          classBtn="bg-[rgba(222,_6,_6,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(222,_6,_6,_0.25)]"
        />
      </section>
      <section className="flex flex-row gap-5 justify-between w-full h-full max-h-[400px]">
        <article className="flex-grow">
          <PolarChart />
        </article>
        <article className="flex-grow">
          <BarChart />
        </article>
      </section>
      <section className="flex flex-col gap-5">
        <LatestSales />
        <BestSellers />
      </section>
    </main>
  );
}

export default Dashboard;
