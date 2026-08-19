import { Link } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
    const herramientas = [
        {
            titulo: 'Gestión de Vehículos',
            descripcion: 'Administra el catálogo de vehículos disponibles para las clases prácticas.',
            enlace: '/dashboard/admin/vehiculos',
            icono: '🚗'
        },
        {
            titulo: 'Gestión de Reservas',
            descripcion: 'Revisa y administra las reservas realizadas por los alumnos.',
            enlace: '/dashboard/admin/reservas',
            icono: '📅'
        },
        {
            titulo: 'Gestión de Pagos',
            descripcion: 'Verifica y administra los pagos realizados por los alumnos.',
            enlace: '/dashboard/admin/pagos',
            icono: '💳'
        },
        {
            titulo: 'Gestión de Instructores',
            descripcion: 'Administra el equipo de instructores y sus asignaciones.',
            enlace: '/dashboard/admin/instructores',
            icono: '👨‍🏫'
        }
    ];

    return (
        <section className="admin-panel">
            <h1>Panel de Administración</h1>
            <h3>Herramientas de Administración</h3>
            <div className="admin-tools">
                {herramientas.map((herramienta, index) => (
                    <article key={index} className="admin-tool">
                        <span className="admin-tool-icon">{herramienta.icono}</span>
                        <h4>{herramienta.titulo}</h4>
                        <p>{herramienta.descripcion}</p>
                        <Link to={herramienta.enlace} className="admin-btn">
                            Ir a {herramienta.titulo.replace('Gestión de ', '')}
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default AdminPanel;