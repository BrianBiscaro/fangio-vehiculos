import { useAuth } from '../auth/useAuth';
import RegisterInstructor from './RegisterInstructor';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="dashboard" style={{ padding: '20px' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Panel de Gestión - Autoescuela Fangio</h2>
                <div>
                    <span>Bienvenido, {user?.username} ({user?.role})</span>
                    <button onClick={logout} style={{ marginLeft: '10px' }}>Cerrar Sesión</button>
                </div>
            </header>

            <hr />

            {user?.role === 'ADMIN' && (
                <div>
                    <h3>⚙️ Herramientas de Administración</h3>
                    <RegisterInstructor />
                </div>
            )}

            {user?.role === 'INSTRUCTOR' && (
                <div>
                    <h3>🚗 Mi Agenda de Clases</h3>
                    <p>Aquí cargaremos los turnos que tenés asignados para hoy.</p>
                </div>
            )}

        </div>
    )
}

export default Dashboard;