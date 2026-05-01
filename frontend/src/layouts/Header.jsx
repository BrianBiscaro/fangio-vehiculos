import { Link } from "react-router-dom";
import './layouts.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <a href="#inicio" className="header-logo">
                    <h1>Fangio Vehículos</h1>
                </a>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <a href="#inicio">Inicio</a>
                        </li>
                        <li>
                            <a href="#sobre-nosotros">Sobre Nosotros</a>
                        </li>
                        <li>
                            <a href="#servicios">Servicios</a>
                        </li>
                        <li>
                            <a href="#testimonios">Testimonios</a>
                        </li>
                        <li>
                            <a href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <Link to="/reservar" className="header-btn header-btn-primary">
                        Reservar
                    </Link>
                </div>
                <button className="header-menu-toggle" aria-label="Menú">
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </button>
            </div>
        </header>
    );
}

export default Header;