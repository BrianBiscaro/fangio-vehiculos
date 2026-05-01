import ReservaPublicaPage from "../reservas/components/ReservaPublicaPage";
import './Servicios.css';

const Servicios = () => {
    const servicios = [
        {
            titulo: 'Alquiler de Vehículos',
            descripcion: 'Ofrecemos una amplia gama de vehículos para alquilar, desde autos compactos hasta camionetas y vehículos de lujo.',
            imagen: '/gol.jpg',
            alt: 'Alquiler de vehículos'
        },
        {
            titulo: 'Prácticas de Manejo',
            descripcion: '¿Quieres mejorar tus habilidades de conducción? Nuestros vehículos también están disponibles para prácticas de manejo, ideales para estudiantes o conductores que buscan ganar confianza.',
            imagen: '/testdrive1_1024x2.jpg',
            alt: 'Prácticas de manejo'
        },
        {
            titulo: 'Alquiler de Trailers',
            descripcion: '¿Necesitas transportar algo grande? Alquilamos trailers para que puedas llevar lo que necesites de manera segura y eficiente.',
            imagen: '/trailer.jpg',
            alt: 'Alquiler de trailers'
        }
    ];
    return (
        <section id="servicios" className="servicios-section">
            <h1 className="servicios-titulo">Servicios</h1>
            <div className="servicios-grid">
                {servicios.map((servicio, index) => (
                    <article key={index} className="servicio-card">
                        <div className="servicio-imagen">
                            <img src={servicio.imagen} alt={servicio.alt} />
                        </div>
                        <div className="servicio-contenido">
                            <h3>{servicio.titulo}</h3>
                            <p>{servicio.descripcion}</p>
                        </div>
                    </article>
                ))}
            </div>
            <ReservaPublicaPage />
        </section>
    )
}

export default Servicios;