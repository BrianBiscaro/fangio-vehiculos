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
        <div className="nuevo-instructor-page">
            <h1>Alta de Nuevo Instructor</h1>

            {mensaje && <div className="mensaje-exito">{mensaje}</div>}
            {error && <div className="mensaje-error">{error}</div>}

            <form className="instructor-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Usuario</label>
                    <input
                        id="username"
                        type="text" name="username" placeholder="Usuario (ej: jpezzota)"
                        value={formData.username} onChange={handleChange} required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        type="text" name="nombre" placeholder="Nombre"
                        value={formData.nombre} onChange={handleChange} required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input
                        id="apellido"
                        type="text" name="apellido" placeholder="Apellido"
                        value={formData.apellido} onChange={handleChange} required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono (opcional)</label>
                    <input
                        id="telefono"
                        type="text" name="telefono" placeholder="Teléfono"
                        value={formData.telefono} onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        id="email"
                        type="email" name="email" placeholder="Correo electrónico"
                        value={formData.email} onChange={handleChange} required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña temporal</label>
                    <input
                        id="password"
                        type="password" name="password" placeholder="Contraseña temporal"
                        value={formData.password} onChange={handleChange} required
                    />
                </div>
                <div className="form-buttons">
                    <button type="submit" className="btn btn-primary">Registrar Instructor</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterInstructor;