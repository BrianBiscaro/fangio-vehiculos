import { useEffect, useState } from 'react';
import useReservas from '../hooks/useReservas';
import './Reserva.css';

const ReservasAdminPage = () => {
    const { reservas, loading, fetchReservas, updateEstado } = useReservas();
    const [filtro, setFiltro] = useState('todas');

    useEffect(() => {
        fetchReservas(filtro);
    }, [filtro, fetchReservas]);

    const handleActualizarEstado = async (id, nuevoEstado) => {
        await updateEstado(id, nuevoEstado);
        fetchReservas(filtro);
    };

    if (loading) return <div>Cargando...</div>;

    return (
        <div className="reservas-admin-page">
            <h1>Gestión de Reservas</h1>

            <div className="filtros">
                <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                    <option value="todas">Todas</option>
                    <option value="pendiente">Pendientes</option>
                    <option value="confirmada">Confirmadas</option>
                    <option value="completada">Completadas</option>
                    <option value="cancelada">Canceladas</option>
                </select>
            </div>

            <div className="reservas-list">
                {reservas.map((reserva) => (
                    <div key={reserva.id} className="reserva-card">
                        <h3>Reserva #{reserva.id}</h3>
                        <p>Cliente: {reserva.cliente?.nombre}</p>
                        <p>Fecha: {new Date(reserva.fecha).toLocaleDateString()}</p>
                        <p>Hora: {reserva.hora}</p>
                        <p>Vehículo: {reserva.vehiculo?.marca} {reserva.vehiculo?.modelo}</p>
                        <p>Instructor: {reserva.instructor?.nombre} {reserva.instructor?.apellido}</p>
                        <p>Estado: <span className={`estado-${reserva.estado}`}>{reserva.estado}</span></p>

                        <div className="acciones">
                            {reserva.estado === 'pendiente' && (
                                <>
                                    <button onClick={() => handleActualizarEstado(reserva.id, 'confirmada')}>
                                        Confirmar
                                    </button>
                                    <button onClick={() => handleActualizarEstado(reserva.id, 'cancelada')}>
                                        Cancelar
                                    </button>
                                </>
                            )}
                            {reserva.estado === 'confirmada' && (
                                <button onClick={() => handleActualizarEstado(reserva.id, 'completada')}>
                                    Marcar Completada
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReservasAdminPage;