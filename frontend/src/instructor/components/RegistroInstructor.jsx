import { useState } from "react";
import { registerService } from "../../auth/services/authService";
import './Instructor.css';

const RegisterInstructor = () => {
    const [formData, setFormData] = useState({
        username: '',
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        password: ''
    });
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje('');
        setError('');

        try {
            await registerService(formData);
            setMensaje('¡Instructor y usuario creados con éxito en la base de datos!');
            setFormData({ username: '', nombre: '', apellido: '', telefono: '', email: '', password: '' });
        } catch (err) {
            setError(err.response?.data || 'Error interno al registrar el instructor. Revisa la consola de Spring Boot.');
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
            <h3>Alta de Nuevo Instructor</h3>

            {mensaje && <p style={{ color: 'green', fontWeight: 'bold' }}>{mensaje}</p>}
            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                <input
                    type="text" name="username" placeholder="Usuario (ej: jpezzota)"
                    value={formData.username} onChange={handleChange} required
                />
                <input
                    type="text" name="nombre" placeholder="Nombre"
                    value={formData.nombre} onChange={handleChange} required
                />
                <input
                    type="text" name="apellido" placeholder="Apellido"
                    value={formData.apellido} onChange={handleChange} required
                />
                <input
                    type="text" name="telefono" placeholder="Teléfono (opcional)"
                    value={formData.telefono} onChange={handleChange}
                />
                <input
                    type="email" name="email" placeholder="Correo electrónico"
                    value={formData.email} onChange={handleChange} required
                />
                <input
                    type="password" name="password" placeholder="Contraseña temporal"
                    value={formData.password} onChange={handleChange} required
                />
                <button type="submit">Registrar Instructor</button>
            </form>
        </div>
    );
};

export default RegisterInstructor;