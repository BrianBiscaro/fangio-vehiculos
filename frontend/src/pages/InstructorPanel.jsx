import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/hooks/useAuth';
import useInstructor from '../instructor/hooks/useInstructor';
import './InstructorPanel.css';

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

    if (loading) return <div className="loading">Cargando...</div>;

    return (
        <section className="instructor-panel">
            <h1>Panel del Instructor</h1>
            <p className="bienvenida">Bienvenido, {user?.nombre}</p>

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
                    <div className="empty-state">
                        <p>No hay reservas</p>
                    </div>
                ) : (
                    reservas.map((reserva) => (
                        <article key={reserva.id} className="reserva-card">
                            <h3>{reserva.vehiculo?.marca} {reserva.vehiculo?.modelo}</h3>
                            <p><strong>Fecha:</strong> {new Date(reserva.fecha).toLocaleDateString()}</p>
                            <p><strong>Hora:</strong> {reserva.hora}</p>
                            <p><strong>Cliente:</strong> {reserva.cliente?.nombre} {reserva.cliente?.apellido}</p>
                            <span className={`estado ${reserva.estado}`}>{reserva.estado}</span>

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
                        </article>
                    ))
                )}
            </div>
        </section>
    );
};

export default InstructorPanel;
