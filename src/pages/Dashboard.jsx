import CardDashboard from '../components/Sidebar/CardDashboard';

function Dashboard() {
    return(
        <main className='flex flex-col gap-5'>
            <h1 className="text-3xl font-semibold">Panel de control</h1>
            <section className="flex flex-row gap-5 justify-between">
                <CardDashboard number={1543} description='Ventas' classBtn='bg-[rgba(6,_222,_105,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(6,_222,_105,_0.25)]' />
                <CardDashboard number={567} description='Clientes' classBtn='bg-[rgba(222,_214,_6,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(222,_214,_6,_0.25)]'/>
                <CardDashboard number={25} description='Empleados' classBtn='bg-[rgba(49,_171,_210,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(49,_171,_210,_0.25)]'/>
                <CardDashboard number={18} description='Catálogo' classBtn='bg-[rgba(222,_6,_6,_0.25)] [box-shadow:0px_12px_20px_0px_rgba(222,_6,_6,_0.25)]'/>
            </section>
        </main>
    )
}

export default Dashboard;