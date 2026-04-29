import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import SobreNosotros from './SobreNosotros';
import Servicios from './Servicios';
import Testimonios from './Testimonios';
import Contacto from './Contacto';


const LandingPage = () => {

    return (
        <div className="landing-page">
            <Header />

            <SobreNosotros />
            <Servicios />
            <Testimonios />
            <Contacto />

            <Footer />
        </div>
    )
}

export default LandingPage;