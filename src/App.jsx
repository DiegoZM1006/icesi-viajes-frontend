import './index.css'
import React from 'react'
import Register from './pages/Register.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Catalogue from './pages/Catalogue.jsx'
import CreateDestination from './pages/CreateDestination.jsx'
import ModifyDestination from './pages/ModifyDestination.jsx'
import AdminClients from './pages/AdminClients.jsx'
import ModifyClient from './pages/ModifyClient.jsx'
import CreateClient from './pages/CreateClient.jsx'
import Login from './pages/Login.jsx'
import PrivateRoute from './utils/PrivateRoute.jsx'

function App() {

  const auth = JSON.parse(localStorage.getItem('user'));
  console.log(auth);

  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Layout />}>
                <Route key={'dashboard'} index={true} element={<Dashboard />} />
              </Route>
              <Route path='/catalogue' element={<Layout />}>
                <Route key={'catalogue'} index={true} element={<Catalogue />} />
              </Route>
              <Route path='/catalogue/create' element={<Layout />}>
                <Route key={'createdestination'} index={true} element={<CreateDestination />} />
              </Route>
              <Route path='/catalogue/modify' element={<Layout />}>
                <Route key={'modifydestination'} index={true} element={<ModifyDestination />} />
              </Route>
              <Route path='/clients' element={<Layout />}>
                <Route key={'clients'} index={true} element={<AdminClients />} />
              </Route>
              <Route path='/clients/modify' element={<Layout />}>
                <Route key={'modifyclient'} index={true} element={<ModifyClient />} />
              </Route>
              <Route path='/clients/create' element={<Layout />}>
                <Route key={'createclient'} index={true} element={<CreateClient />} />
              </Route>
            </Route>

          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  )
}

export default App
