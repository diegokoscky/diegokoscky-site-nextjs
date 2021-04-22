import { useState } from 'react';
import styles from '../Navbar/Navbar.module.scss';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleNavbar = () => setClick(!click);

    return (
        <IconContext.Provider value={
            {color: '#242424'}
        }>
            <nav className={styles.navbar}>
                <div className="container">
                    <div className={`flex-between `+styles.navbarWrapper}>
                        <Link to="__next"
                        smooth={true}
                        duration={700}>
                            <img className={styles.logoImg} 
                            src="/imgs/logo.svg" 
                            alt="Logo" />
                        </Link>
                        <div className={styles.menuIcon} 
                        onClick={handleNavbar}>
                            { click ? <FaTimes /> : <FaBars /> }
                        </div>
                        <ul id={styles.navDesktop} 
                        className={ click ? styles.navActive : '' }>
                            <li onClick={handleNavbar}>
                                <Link to="metodo"
                                smooth={true}
                                duration={700}>
                                    Método
                                </Link>
                            </li>
                            <li onClick={handleNavbar}>
                                <Link to="servico"
                                smooth={true}
                                duration={700}>
                                    Serviço
                                </Link>
                            </li>
                            <li onClick={handleNavbar}>
                                <Link to="portfolio"
                                smooth={true}
                                duration={700}>
                                    Portfólio
                                </Link>
                            </li>
                            <li onClick={handleNavbar}>
                                <Link to="sobre"
                                smooth={true}
                                duration={700}>
                                    Sobre Mim
                                </Link>
                            </li>
                            <li onClick={handleNavbar}>
                                <Link to="contato"
                                smooth={true}
                                duration={700}>
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>          
        </IconContext.Provider>
    )
}
