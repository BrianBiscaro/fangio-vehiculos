import { useState } from "react";
import { TurnosContext } from "./TurnosContext";


export const TurnosProvider = ({ children }) => {
    const [turnosDisponibles, setTurnosDisponibles] = useState([]);
    const [loadingTurnos, setLoadingTurnos] = useState(false);
    const [errorTurnos, setErrorTurnos] = useState(null);

    const fetchTurnosDisponibles = useCallback(async (fecha, vehiculoId) => {
        setLoadingTurnos(true);
        setErrorTurnos(null);
        try {
            const response = await api.get(
                `/api/public/reservas/disponibles?fecha=${fecha}&vehiculoId=${vehiculoId}`
            );
            setTurnosDisponibles(response.data);
            return response.data;
        } catch (err) {
            setErrorTurnos(err.response?.data?.message || 'Error al cargar turnos disponibles');
            console.error('Error fetching turnos disponibles:', err);
            return [];
        } finally {
            setLoadingTurnos(false);
        }
    }, []);

    const updateTurnosDisponibles = useCallback((newTurnos) => {
        setTurnosDisponibles(newTurnos);
    }, []);

    return (
        <TurnosContext.Provider value={{
            turnosDisponibles,
            loadingTurnos,
            errorTurnos,
            fetchTurnosDisponibles,
            updateTurnosDisponibles,
        }}>
            {children}
        </TurnosContext.Provider>
    );
};
