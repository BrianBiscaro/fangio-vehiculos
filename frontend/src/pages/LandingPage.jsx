import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import SobreNosotros from './SobreNosotros';
import Servicios from './Servicios';
import Testimonios from './Testimonios';
import Contacto from './Contacto';
import './LandingPage.css';


const LandingPage = () => {

    return (
        <main className='landing-page'>
            <Header />

            <section id="inicio" className="hero-section">
                <SobreNosotros />
            </section>
            <Servicios />
            <Testimonios />
            <Contacto />

            <Footer />
        </main>
    )
}

export default LandingPage;