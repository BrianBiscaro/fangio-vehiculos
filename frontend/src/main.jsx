import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider.jsx'
import { ReservaProvider } from './reservas/context/ReservaProvider.jsx'
import { PagoProvider } from './pagos/context/PagoProvider.jsx'
import { VehiculoProvider } from './vehiculos/context/VehiculoProvider.jsx'
import { InstructorProvider } from './instructor/context/InstructorProvider.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ReservaProvider>
          <PagoProvider>
            <VehiculoProvider>
              <InstructorProvider>
                <App />
              </InstructorProvider>
            </VehiculoProvider>
          </PagoProvider>
        </ReservaProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
