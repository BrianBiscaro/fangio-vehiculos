const Contacto = () => {

    return (
        <section className="contacto" id="contacto">
            <h2>Contacto</h2>
            <p>¿Tienes preguntas o quieres saber más? ¡Contáctanos!</p>
            <form className="contacto-form">
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="Tu email" required />
                </div>
                <div className="form-group">
                    <label>Mensaje:</label>
                    <textarea placeholder="Tu mensaje" required></textarea>
                </div>
                <button type="submit">Enviar Mensaje</button>
            </form>
        </section>
    )
}

export default Contacto;