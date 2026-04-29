import { useEffect, useState } from 'react';
import { useAuth } from '../auth/hooks/useAuth';
import useInstructor from '../instructor/hooks/useInstructor';

const InstructorPanel = () => {
    const { user } = useAuth();
    const { reservas, loading, fetchProximasReservas, fetchHistorico, confirmarReserva, cancelarReserva } = useInstructor();
    const [activeTab, setActiveTab] = useState('proximas');

    useEffect(() => {
        if (activeTab === 'proximas') {
            fetchProximasReservas();
        } else {
            fetchHistorico();
        }
    }, [activeTab, fetchProximasReservas, fetchHistorico]);

    const handleConfirmar = async (id) => {
        await confirmarReserva(id);
        fetchProximasReservas();
    };

    const handleCancelar = async (id) => {
        if (!window.confirm('¿Cancelar esta reserva?')) return;
        await cancelarReserva(id);
        fetchProximasReservas();
    };

    if (loading) return <div>Cargando...</div>;

    return (
        <div className="instructor-panel">
            <h1>Panel del Instructor</h1>
            <p>Bienvenido, {user?.nombre}</p>

            <div className="tabs">
                <button
                    className={activeTab === 'proximas' ? 'active' : ''}
                    onClick={() => setActiveTab('proximas')}
                >
                    Próximas Reservas
                </button>
                <button
                    className={activeTab === 'historico' ? 'active' : ''}
                    onClick={() => setActiveTab('historico')}
                >
                    Historial
                </button>
            </div>

            <div className="reservas-list">
                {reservas.length === 0 ? (
                    <p>No hay reservas</p>
                ) : (
                    reservas.map((reserva) => (
                        <div key={reserva.id} className="reserva-card">
                            <h3>{reserva.vehiculo?.marca} {reserva.vehiculo?.modelo}</h3>
                            <p>Fecha: {new Date(reserva.fecha).toLocaleDateString()}</p>
                            <p>Hora: {reserva.hora}</p>
                            <p>Cliente: {reserva.cliente?.nombre} {reserva.cliente?.apellido}</p>
                            <p>Estado: {reserva.estado}</p>

                            {activeTab === 'proximas' && reserva.estado === 'pendiente' && (
                                <div className="acciones">
                                    <button onClick={() => handleConfirmar(reserva.id)}>
                                        Confirmar
                                    </button>
                                    <button onClick={() => handleCancelar(reserva.id)} className="btn-danger">
                                        Cancelar
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default InstructorPanel;