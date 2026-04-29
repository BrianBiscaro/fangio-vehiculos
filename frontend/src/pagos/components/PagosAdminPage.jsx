import { useEffect } from 'react';
import usePagos from '../hooks/usePagos';
import './Pago.css';

const PagosAdminPage = () => {
    const { pagos, loading, fetchPagos, verificarPago } = usePagos();

    useEffect(() => {
        fetchPagos();
    }, [fetchPagos]);

    const handleVerificar = async (id) => {
        await verificarPago(id);
        fetchPagos();
    };

    if (loading) return <div>Cargando...</div>;

    return (
        <div className="pagos-admin-page">
            <h1>Gestión de Pagos</h1>

            <div className="pagos-list">
                {pagos.map((pago) => (
                    <div key={pago.id} className="pago-card">
                        <h3>Pago #{pago.id}</h3>
                        <p>Reserva: #{pago.reservaId}</p>
                        <p>Monto: ${pago.monto}</p>
                        <p>Estado: <span className={`estado-${pago.estado}`}>{pago.estado}</span></p>
                        <p>Fecha: {new Date(pago.fecha).toLocaleDateString()}</p>

                        {pago.estado === 'pendiente' && (
                            <button onClick={() => handleVerificar(pago.id)}>
                                Verificar
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PagosAdminPage;