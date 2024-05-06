import CardDashboard from '../components/Sidebar/CardDashboard';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto'
import { Bar, PolarArea } from "react-chartjs-2";
import { Navigate } from 'react-router-dom';

function Dashboard() {

    const auth = JSON.parse(localStorage.getItem('user'));

    if (auth) {
        const rol = auth.data.role;
        if (rol !== 'ADMIN') {
            return <Navigate to='/catalogue' />
        } 
    } else {
        return <Navigate to='/' />
    }

    return(
        <main className='flex flex-col gap-5'>
            <h1 className="text-3xl font-semibold">Panel de control</h1>
            <section className="flex flex-row gap-5 justify-between">
                <CardDashboard number={1543} description='Ventas' classBtn='bg-[rgba(6,_222,_105,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(6,_222,_105,_0.25)]' />
                <CardDashboard number={567} description='Clientes' classBtn='bg-[rgba(222,_214,_6,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(222,_214,_6,_0.25)]'/>
                <CardDashboard number={25} description='Empleados' classBtn='bg-[rgba(49,_171,_210,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(49,_171,_210,_0.25)]'/>
                <CardDashboard number={18} description='Catálogo' classBtn='bg-[rgba(222,_6,_6,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(222,_6,_6,_0.25)]'/>
            </section>
            <section className='flex flex-row gap-5 justify-between w-full h-full max-h-[400px]'>
                <article className='flex-grow'>
                    <PolarArea 
                        data={{
                            labels: ['Cartagena', 'Hawaii', 'Miami', 'Cancún', 'Bogotá'],
                            datasets: [
                                {
                                    label: 'Ventas',
                                    data: [200, 100, 100, 100, 250]
                                }
                            ],
                        }}
                        options={
                            {
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Mejores destinos',
                                        align: 'start',
                                        font: {
                                            size: 18,
                                        }
                                    },
                                    legend: {
                                        labels: {
                                          usePointStyle: true,
                                        },
                                      }
                                }
                            }
                        }
                    />
                </article>
                <article className='flex-grow'>
                    <Bar 
                        data={{
                            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                            datasets: [
                                {
                                    label: 'Ventas',
                                    data: [200, 100, 50, 100, 150, 200, 250],
                                }
                            ],
                        }}
                        options={
                            {
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Ventas de la semana',
                                        align: 'start',
                                        font: {
                                            size: 18
                                        }
                                    }
                                }
                            }
                        }
                    />
                </article>
            </section>
            <section>
                <h2>Ultimas ventas, Mejores agentes</h2>
            </section>
        </main>
    )
}

export default Dashboard;