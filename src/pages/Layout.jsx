import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <section className='flex flex-row'>
            <Sidebar />
            <main className='ml-[--var-width-sidebar] py-5 px-10 bg-[--var-white] w-full min-h-screen h-full'>
                <Outlet />
            </main>
        </section>
    )
}

export default Layout;
