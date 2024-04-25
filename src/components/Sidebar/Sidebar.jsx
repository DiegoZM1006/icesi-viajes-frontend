import Button from './ButtonSidebar';
import IconDashboard from '../Icons/IconDashboard';

function Sidebar() {
    return (
        <aside className='fixed left-0 top-0 bg-[--var-main-color] w-full max-w-[--var-width-sidebar] h-screen text-white flex flex-col justify-between gap-6 p-5'>
            <section>
                <h1 className='font-bold text-3xl text-center'>VIAJES - ICESI</h1>
                <hr className='w-full h-[2px] mt-2 mx-auto border-0 rounded bg-white'/>
            </section>
            <section className='flex flex-col justify-start gap-5'>
                <Button description='Panel de control' image={<IconDashboard />} active/>
                <Button description='Catálogo' image={<IconDashboard />}/>
                <Button description='Reservas - Ventas' image={<IconDashboard />}/>
                <Button description='Administrar clientes' image={<IconDashboard />}/>
                <Button description='Administrar empleados' image={<IconDashboard />}/>
            </section>
            <section className='flex flex-col items-center justify-end flex-grow'>
                <p>Administrador</p>
                <hr className='w-full h-[2px] m-2 mx-auto border-0 rounded bg-white'/>
                <p className='mb-5'>Jhon Doe</p>
                <Button description='Cerrar sesión' image={<IconDashboard />}/>
            </section>
        </aside>
    )
}

export default Sidebar;