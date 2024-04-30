import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
