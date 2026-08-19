import './Testimonios.css';

const Testimonios = () => {
    const testimonios = [
        {
            nombre: "Juan Pérez",
            comentario: "Excelente servicio, aprendí mucho y me sentí muy seguro durante las clases.",
            estrellas: 5
        },
        {
            nombre: "María Gómez",
            comentario: "Los instructores son muy profesionales y atentos. ¡Recomiendo Fangio Vehículos!",
            estrellas: 5
        },
        {
            nombre: "Carlos Rodríguez",
            comentario: "La variedad de vehículos es impresionante, pude practicar con el auto que quería.",
            estrellas: 5
        }
    ];
    return (
        <section className="testimonios" id="testimonios">
            <h1 className="testimonios-titulo">Testimonios</h1>
            <div className="testimonios-grid">
                {testimonios.map((testimonio, index) => (
                    <article key={index} className="testimonio-card">
                        <div className="testimonio-estrellas">
                            {Array.from({ length: testimonio.estrellas }, (_, i) => (
                                <span key={i} className="estrella">★</span>
                            ))}
                        </div>
                        <p className="testimonio-comentario">"{testimonio.comentario}"</p>
                        <h3 className="testimonio-nombre">{testimonio.nombre}</h3>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Testimonios;