import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useVehiculos from '../hooks/useVehiculos';
import './Vehiculo.css';

const NuevoVehiculoPage = () => {
    const navigate = useNavigate();
    const { loading, createVehiculo } = useVehiculos();
    const [formData, setFormData] = useState({
        marca: '',
        modelo: '',
        anio: '',
        patente: '',
        color: '',
        estado: 'disponible'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createVehiculo(formData);
            alert('Vehículo creado exitosamente');
            navigate('/dashboard/vehiculos');
        } catch (err) {
            alert('Error al crear el vehículo', err);
        }
    };

    return (
        <div className="nuevo-vehiculo-page">
            <h1>Nuevo Vehículo</h1>
            <form onSubmit={handleSubmit} className="vehiculo-form">
                <div className="form-group">
                    <label>Marca:</label>
                    <input
                        type="text"
                        value={formData.marca}
                        onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Modelo:</label>
                    <input
                        type="text"
                        value={formData.modelo}
                        onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Año:</label>
                    <input
                        type="number"
                        value={formData.anio}
                        onChange={(e) => setFormData({ ...formData, anio: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Patente:</label>
                    <input
                        type="text"
                        value={formData.patente}
                        onChange={(e) => setFormData({ ...formData, patente: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Color:</label>
                    <input
                        type="text"
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar Vehículo'}
                </button>
            </form>
        </div>
    );
};


export default NuevoVehiculoPage;