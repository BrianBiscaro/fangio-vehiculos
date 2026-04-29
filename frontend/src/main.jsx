import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider.jsx'
import { TurnosProvider } from './turnos/TurnosContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TurnosProvider>
          <App />
        </TurnosProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
