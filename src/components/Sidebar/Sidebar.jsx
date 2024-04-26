import Button from './ButtonSidebar';
import IconDashboard from '../Icons/IconDashboard';
import { Link } from 'react-router-dom';

function Sidebar() {

    const btnActive = (path) => window.location.pathname === path;

    return (
        <aside className='fixed left-0 top-0 bg-[--var-main-color] w-full max-w-[--var-width-sidebar] h-screen text-white flex flex-col justify-between gap-6 p-5'>
            <section>
                <h1 className='font-bold text-3xl text-center'>VIAJES - ICESI</h1>
                <hr className='w-full h-[2px] mt-2 mx-auto border-0 rounded bg-white'/>
            </section>
            <section className='flex flex-col justify-start gap-5'>
                <Link to='/dashboard'>
                    {btnActive('/dashboard') ? <Button description='Panel de control' image={<IconDashboard />} active={true}/> : <Button description='Panel de control' image={<IconDashboard />} active={false}/>}
                </Link>
                <Link to={'/catalogue'}>
                    {btnActive('/catalogue') ? <Button description='Catálogo' image={<IconDashboard />} active={true}/> : <Button description='Catálogo' image={<IconDashboard />} active={false}/>}
                </Link>
                {btnActive('/reservas') ? <Button description='Reservas - Ventas' image={<IconDashboard />} active={true}/> : <Button description='Reservas - Ventas' image={<IconDashboard />} active={false}/> }
                {btnActive('/clientes') ? <Button description='Adminstrar Clientes' image={<IconDashboard />} active={true}/> : <Button description='Adminstrar Clientes' image={<IconDashboard />} active={false}/> }
                {btnActive('/empleados') ? <Button description='Administra Empleados' image={<IconDashboard />} active={true}/> : <Button description='Adminstrar Empleados' image={<IconDashboard />} active={false}/> }
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