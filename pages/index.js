import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Metodo from '../components/Metodo/Metodo';
import Servico from '../components/Servico/Servico';
import SEO from '../components/SEO/SEO';
import Portfolio from '../components/Portfolio/Portfolio';
import Sobre from '../components/Sobre/Sobre';
import Contato from '../components/Contato/Contato';

export default function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <Hero />
                <Metodo />
                <Servico />
                <SEO />
                <Portfolio />
                <Sobre />
                <Contato />
            </main>
            <Footer />
        </>
    )
}
