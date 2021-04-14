import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import styles from './Footer.module.scss';
import { IconContext } from 'react-icons/lib';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
    return (
        <>
            <footer id={styles.footer}>
                <div className="section">
                    <div className="container">
                        <h3>Vamos Socializar!</h3>
                        <p>
                            Estou ansioso para te ouvir! Sinta-se à vontade para entrar em contato 
                            comigo por email, telefone ou pelas redes sociais abaixo!
                        </p>
                        <div className={styles.footerIcons+` flex-center`}>
                            <IconContext.Provider value={{ 
                                color: '#fff',
                                size: 60
                            }}>
                                <a href="https://www.facebook.com/diegokpro" target="_blank">
                                    <FaFacebookF />
                                </a>
                                <a href="https://br.linkedin.com/in/diegokoscky" target="_blank">
                                    <FaLinkedinIn />
                                </a>                            
                            </IconContext.Provider>                        
                        </div>
                    </div>
                </div>            
                <div className={styles.footerCopy}>
                    <div className="container">
                        <p>diegokoscky.com.br | {(new Date().getFullYear())} | <a href="https://diegokoscky.com.br/blog/" target="_blank">Blog</a></p>
                    </div>
                </div>
            </footer>
            <a href="https://api.whatsapp.com/send?phone=5531987179432" className={styles.btnFixedWhatsapp} target="_blank" title="Me envie uma mensagem pelo Whatsapp!">
                <IconContext.Provider value={{ 
                    color: '#07bc4c',
                    size: 30
                }}>
                    <IoLogoWhatsapp />
                </IconContext.Provider>
            </a>
        </>
    )
}

export default Footer
