
import './SobreNosotros.css';

const SobreNosotros = () => {
    return (
        <section id="sobre-nosotros" className="sobre-nosotros-section">
            <div className="sobre-nosotros-bg">
                <img src="/Slider5x1920.jpg" alt="Fangio Vehículos" />
            </div>
            <div className="sobre-nosotros-content">
                <h1 className="sobre-nosotros-titulo">¡Conócenos!</h1>
                <h2 className="sobre-nosotros-subtitulo">Somos FANGIO</h2>
                <p className="sobre-nosotros-descripcion">
                    Agencia líder de alquiler de vehículos en la ciudad de La Plata
                </p>
                <p className="sobre-nosotros-texto">
                    Contamos con múltiples opciones de autos, motos y trailers para satisfacer las necesidades de nuestros clientes.
                </p>
                <p className="sobre-nosotros-texto">
                    ¡También podés aprovechar nuestros vehículos para realizar prácticas de manejo!
                </p>
                <p className="sobre-nosotros-cta">¡Sé parte de la familia!</p>
                <div className="sobre-nosotros-botones">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Instagram
                    </a>
                    <a href="https://wa.me/549221" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SobreNosotros;