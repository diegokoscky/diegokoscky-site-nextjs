import styles from '../Navbar/Navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.navbarWrapper}>
                    <Link href="/" passHref>
                        <img className={styles.logoImg} 
                            src="/imgs/logo.svg" 
                            alt="Logo" />
                    </Link>
                    <ul className="flex-center">
                        <li>
                            <Link href="#metodo" passHref>
                                Método
                            </Link>
                        </li>
                        <li>
                            <Link href="#servico" passHref>
                                Serviço
                            </Link>
                        </li>
                        <li>
                            <Link href="#portfolio" passHref>
                                Portfólio
                            </Link>
                        </li>
                        <li>
                            <Link href="#sobre" passHref>
                                Sobre Mim
                            </Link>
                        </li>
                        <li>
                            <Link href="#contato" passHref>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
