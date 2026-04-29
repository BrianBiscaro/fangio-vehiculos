import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider';
import ProtectedRoute from './auth/components/ProtectedRoute';

// Páginas
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage';
import ReservaPublicaPage from './reservas/components/ReservaPublicaPage';
import PagoPage from './pagos/components/PagoPage';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import VehiculosPage from './vehiculos/components/VehiculosPage';
import NuevoVehiculoPage from './vehiculos/components/NuevoVehiculoPage';
import ReservasAdminPage from './reservas/components/ReservasAdminPage';
import NuevoInstructorPage from './instructor/components/RegistroInstructor';
import PagosAdminPage from './pagos/components/PagosAdminPage';



function App() {
  return (
    <AuthProvider>
      <main className="main-content">
        <Routes>
          {/* Público */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/reservar' element={<ReservaPublicaPage />} />
          <Route path='/pagos/:reservaId' element={<PagoPage />} />

          {/* Protegido */}
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />

            <Route path='/dashboard/admin' element={<AdminPanel />} />
            <Route path='/dashboard/admin/vehiculos' element={<VehiculosPage />} />
            <Route path='/dashboard/admin/reservas' element={<ReservasAdminPage />} />
            <Route path='/dashboard/admin/instructores' element={<NuevoInstructorPage />} />
            <Route path='/dashboard/admin/pagos' element={<PagosAdminPage />} />



          </Route>
        </Routes>
      </main>
    </AuthProvider>
  )
}

export default App;