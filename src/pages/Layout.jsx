import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {

    const user = JSON.parse(localStorage.getItem('user') || 'null');

    return (
        <section className='flex flex-row'>
            <Sidebar user={user} />
            <main className='ml-[--var-width-sidebar] py-5 px-10 bg-[--var-white] w-full min-h-screen h-full overflow-hidden'>
                <Outlet></Outlet>
            </main>
        </section>
    )
}

export default Layout;
