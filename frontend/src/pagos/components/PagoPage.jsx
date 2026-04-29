import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePagos from '../hooks/usePagos';
import useReservas from '../../reservas/hooks/useReservas';
import './Pago.css';

const PagoPage = () => {
    const { reservaId } = useParams();
    const navigate = useNavigate();
    const { loading: loadingPago, crearPreferencia } = usePagos();
    const { loading: loadingReserva, fetchReservaById } = useReservas();
    const [reserva, setReserva] = useState(null);

    useEffect(() => {
        if (reservaId) {
            loadReserva();
        }
    }, [reservaId]);

    const loadReserva = async () => {
        const data = await fetchReservaById(reservaId);
        setReserva(data);
    };

    const handlePago = async () => {
        try {
            const data = await crearPreferencia(parseInt(reservaId));
            if (data.initPoint) {
                window.location.href = data.initPoint;
            }
        } catch (err) {
            alert('Error al procesar el pago');
        }
    };

    const loading = loadingPago || loadingReserva;

    if (loading) return <div>Cargando...</div>;
    if (!reserva) return <div>Reserva no encontrada</div>;

    return (
        <div className="pago-page">
            <h1>Confirmar Pago</h1>

            <div className="resumen">
                <h2>Resumen de la Reserva</h2>
                <p><strong>Vehículo:</strong> {reserva.vehiculo?.marca} {reserva.vehiculo?.modelo}</p>
                <p><strong>Instructor:</strong> {reserva.instructor?.nombre} {reserva.instructor?.apellido}</p>
                <p><strong>Fecha:</strong> {new Date(reserva.fecha).toLocaleDateString()}</p>
                <p><strong>Hora:</strong> {reserva.hora}</p>
                <p className="monto"><strong>Total:</strong> $5.000</p>
            </div>

            <button onClick={handlePago} disabled={loading} className="btn-primary">
                {loading ? 'Procesando...' : 'Pagar con MercadoPago'}
            </button>

            <button onClick={() => navigate('/')} className="btn-secondary">
                Cancelar
            </button>
        </div>
    );
};

export default PagoPage;