import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useVehiculos from '../../vehiculos/hooks/useVehiculos';
import useReservas from '../hooks/useReservas';
import './Reserva.css';

const ReservaPublicaPage = () => {
    const navigate = useNavigate();
    const { vehiculos, loading: loadingVehiculos, fetchDisponibles } = useVehiculos();
    const {
        loading: loadingReservas,
        fetchHorariosDisponibles,
        fetchInstructoresDisponibles,
        createReserva
    } = useReservas();

    const [instructores, setInstructores] = useState([]);
    const [horarios, setHorarios] = useState([]);
    const [selected, setSelected] = useState({
        vehiculoId: '',
        instructorId: '',
        fecha: '',
        hora: ''
    });

    // Cargar opciones disponibles
    useEffect(() => {
        fetchDisponibles();
        loadInstructores();
    }, [fetchDisponibles]);

    const loadInstructores = async () => {
        const data = await fetchInstructoresDisponibles();
        setInstructores(data);
    };

    // Cargar horarios cuando cambia fecha o vehículo
    useEffect(() => {
        if (selected.fecha && selected.vehiculoId) {
            loadHorarios();
        }
    }, [selected.fecha, selected.vehiculoId]);

    const loadHorarios = async () => {
        const data = await fetchHorariosDisponibles(selected.fecha, selected.vehiculoId);
        setHorarios(data);
    };

    const handleReservar = async () => {
        try {
            const reserva = await createReserva({
                vehiculoId: selected.vehiculoId,
                instructorId: selected.instructorId,
                fecha: selected.fecha,
                hora: selected.hora
            });
            navigate(`/pagos/${reserva.id}`);
        } catch (err) {
            alert('Error al realizar la reserva');
        }
    };

    const loading = loadingVehiculos || loadingReservas;

    return (
        <div className="reserva-publica-page">
            <h1>Reservar Clase de Manejo</h1>

            {/* Step 1: Seleccionar Vehículo */}
            <div className="step">
                <h2>1. Selecciona un Vehículo</h2>
                <div className="opciones-grid">
                    {vehiculos.map((v) => (
                        <div
                            key={v.id}
                            className={`opcion-card ${selected.vehiculoId === v.id ? 'selected' : ''}`}
                            onClick={() => setSelected({ ...selected, vehiculoId: v.id })}
                        >
                            <h3>{v.marca} {v.modelo}</h3>
                            <p>Patente: {v.patente}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Step 2: Seleccionar Instructor */}
            <div className="step">
                <h2>2. Selecciona un Instructor</h2>
                <div className="opciones-grid">
                    {instructores.map((i) => (
                        <div
                            key={i.id}
                            className={`opcion-card ${selected.instructorId === i.id ? 'selected' : ''}`}
                            onClick={() => setSelected({ ...selected, instructorId: i.id })}
                        >
                            <h3>{i.nombre} {i.apellido}</h3>
                            <p>Teléfono: {i.telefono}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Step 3: Seleccionar Fecha y Hora */}
            <div className="step">
                <h2>3. Selecciona Fecha y Hora</h2>
                <div className="form-group">
                    <label>Fecha:</label>
                    <input
                        type="date"
                        value={selected.fecha}
                        onChange={(e) => setSelected({ ...selected, fecha: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                    />
                </div>
                {horarios.length > 0 && (
                    <div className="horarios-grid">
                        {horarios.map((h) => (
                            <button
                                key={h}
                                className={`horario-btn ${selected.hora === h ? 'selected' : ''}`}
                                onClick={() => setSelected({ ...selected, hora: h })}
                            >
                                {h}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Step 4: Confirmar */}
            <button
                onClick={handleReservar}
                disabled={loading || !selected.vehiculoId || !selected.instructorId || !selected.fecha || !selected.hora}
                className="btn-primary"
            >
                {loading ? 'Procesando...' : 'Confirmar Reserva'}
            </button>
        </div>
    );
};

export default ReservaPublicaPage;