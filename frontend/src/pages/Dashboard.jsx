import { useAuth } from '../auth/hooks/useAuth';
import AdminPanel from './AdminPanel';
import InstructorPanel from './InstructorPanel';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="dashboard">
            <header>
                <h2>Panel de Gestión - Autoescuela Fangio</h2>
                <div>
                    <span>Bienvenido, {user?.username} ({user?.role})</span>
                    <button onClick={logout}>Cerrar Sesión</button>
                </div>
            </header>

            <hr />

            {user?.role === 'ADMIN' && (
                <AdminPanel />
            )}

            {user?.role === 'INSTRUCTOR' && (
                <InstructorPanel />
            )}

        </div>
    )
}

export default Dashboard;