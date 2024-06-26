import Button from './ButtonSidebar';
import IconDashboard from '../Icons/IconDashboard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconSales from '../Icons/Sales';
import IconCatalogue from '../Icons/Catalogue';
import IconAdminClients from '../Icons/AdminClients';
import IconAdminEmployees from '../Icons/AdminEmployees';

function Sidebar(props) {

    const btnActive = (path) => window.location.pathname === path;

    function logout() {
        localStorage.removeItem('user');
        window.location.href = '/';
    }

    function translateRole(role) {
        switch (role) {
            case 'ADMIN':
                return 'Administrador';
            case 'AGENT':
                return 'Agente';
            case 'CLIENT':
                return 'Cliente';
            default:
                return 'Desconocido';
        }
    }

    const userRole = translateRole(props.user.data.role);

    const renderButtons = () => {
        switch (userRole) {
            case 'Administrador':
                return (
                    <>
                        <Link to='/dashboard'>
                            <Button description='Panel de control' image={<IconDashboard />} active={btnActive('/dashboard')} />
                        </Link>
                        <Link to={'/catalogue'}>
                            <Button description='Catálogo' image={<IconCatalogue />} active={btnActive('/catalogue')} />
                        </Link>
                        <Link to={'/sales'}>
                            <Button description='Reservas - Ventas' image={<IconSales />} active={btnActive('/sales')} />
                        </Link>
                        <Link to={'/clients'}>
                            <Button description='Administrar Clientes' image={<IconAdminClients />} active={btnActive('/clients')} />
                        </Link>
                        <Link to={'/employees'}>
                            <Button description='Administrar Empleados' image={<IconAdminEmployees />} active={btnActive('/employees')} />
                        </Link>
                    </>
                );
            case 'Agente':
                return (
                    <>
                        <Link to={'/catalogue'}>
                            <Button description='Catálogo' image={<IconCatalogue />} active={btnActive('/catalogue')} />
                        </Link>
                        <Link to={'/sales'}>
                            <Button description='Reservas - Ventas' image={<IconSales />} active={btnActive('/sales')} />
                        </Link>
                        <Link to={'/clients'}>
                            <Button description='Administrar Clientes' image={<IconAdminClients />} active={btnActive('/clients')} />
                        </Link>
                    </>
                );
            case 'Cliente':
                return (
                    <Link to={'/catalogue'}>
                        <Button description='Catálogo' image={<IconCatalogue />} active={btnActive('/catalogue')} />
                    </Link>
                );
            default:
                return null;
        }
    };

    return (
        <aside className='fixed left-0 top-0 bg-[--var-main-color] w-full max-w-[--var-width-sidebar] h-screen text-white flex flex-col justify-between gap-6 p-5 z-50'>
            <section>
                <h1 className='font-bold text-3xl text-center'>VIAJES - ICESI</h1>
                <hr className='w-full h-[2px] mt-2 mx-auto border-0 rounded bg-white'/>
            </section>
            <section className='flex flex-col justify-start gap-5'>
                {renderButtons()}
            </section>
            <section className='flex flex-col items-center justify-end flex-grow'>
                <p>{userRole}</p>
                <hr className='w-full h-[2px] m-2 mx-auto border-0 rounded bg-white'/>
                <p className='mb-5'>{props.user.data.name}</p>
                <button onClick={logout} className='bg-[--var-danger] text-white py-2 px-5  hover:bg-red-700 rounded-md w-full'>Cerrar sesión</button>
            </section>
        </aside>
    );
}


Sidebar.propTypes = {
    user: PropTypes.object.isRequired
}

export default Sidebar;