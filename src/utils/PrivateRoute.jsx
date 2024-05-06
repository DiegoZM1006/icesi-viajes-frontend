import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    let auth = JSON.parse(localStorage.getItem('user') || 'null');
    return (
        auth && auth.data.token ? <Outlet /> : <Navigate to="/"/>
    );
}

export default PrivateRoutes;
