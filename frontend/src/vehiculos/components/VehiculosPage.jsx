import { useEffect } from 'react';
import useVehiculos from '../hooks/useVehiculos';
import './Vehiculo.css';

const VehiculosPage = () => {
    const { vehiculos, loading, error, fetchVehiculos, deleteVehiculo } = useVehiculos();

    useEffect(() => {
        fetchVehiculos();
    }, [fetchVehiculos]);

    const handleDelete = async (id) => {
        if (!window.confirm('¿Está seguro de eliminar este vehículo?')) return;
        await deleteVehiculo(id);
    };

    if (loading) return <div>Cargando vehículos...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="vehiculos-page">
            <h1>Gestión de Vehículos</h1>
            <button onClick={() => window.location.href = '/dashboard/vehiculos/nuevo'}>
                + Agregar Vehículo
            </button>

            <div className="vehiculos-grid">
                {vehiculos.map((vehiculo) => (
                    <div key={vehiculo.id} className="vehiculo-card">
                        <h3>{vehiculo.marca} {vehiculo.modelo}</h3>
                        <p>Patente: {vehiculo.patente}</p>
                        <p>Año: {vehiculo.anio}</p>
                        <p>Estado: {vehiculo.estado}</p>
                        <div className="acciones">
                            <button>Editar</button>
                            <button onClick={() => handleDelete(vehiculo.id)} className="btn-danger">
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VehiculosPage;