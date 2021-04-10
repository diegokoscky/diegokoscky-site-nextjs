import { useState } from 'react'
import styles from '../Navbar/Navbar.module.scss';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleNavbar = () => setClick(!click);

    return (
        <IconContext.Provider value={
            {color: '#242424'}
        }>
            <header>
                <nav className={styles.navbar}>
                    <div className="container">
                        <div className={`flex-between `+styles.navbarWrapper}>
                            <Link href="/" passHref>
                                <img className={styles.logoImg} 
                                src="/imgs/logo.svg" 
                                alt="Logo" />
                            </Link>
                            <div className={styles.menuIcon} 
                            onClick={handleNavbar}>
                                { click ? <FaTimes /> : <FaBars /> }
                            </div>
                            <ul id={styles.navDesktop} 
                            className={ click ? styles.navActive : 'flex-center' }>
                                <li onClick={handleNavbar}>
                                    <Link href="#metodo" passHref>
                                        Método
                                    </Link>
                                </li>
                                <li onClick={handleNavbar}>
                                    <Link href="#servico" passHref>
                                        Serviço
                                    </Link>
                                </li>
                                <li onClick={handleNavbar}>
                                    <Link href="#portfolio" passHref>
                                        Portfólio
                                    </Link>
                                </li>
                                <li onClick={handleNavbar}>
                                    <Link href="#sobre" passHref>
                                        Sobre Mim
                                    </Link>
                                </li>
                                <li onClick={handleNavbar}>
                                    <Link href="#contato" passHref>
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>            
        </IconContext.Provider>
    )
}
