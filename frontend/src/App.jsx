import './App.css'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashBoard from './pages/Dashboard';
import AuthProvider from './auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <main className="main-content">

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </main>
    </AuthProvider>
  )
}

export default App;