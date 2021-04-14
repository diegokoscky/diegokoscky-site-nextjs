import styles from './Contato.module.scss';
import {IoLogoWhatsapp} from 'react-icons/io';
import { FaFacebookMessenger, FaTelegram } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

export default function Contato() {
    return (
        <section id="contato" className="section">
            <div className="container">
                <h2>Entre em Contato Comigo</h2>
                <p>
                    Utilize os contatos abaixo para <strong>falar comigo</strong>. Eu responderei o mais 
                    <strong> rápido possível</strong>. E não tenha medo de me enviar um "Oi!". Estou 
                    ansioso para te ouvir!
                </p>
                <div className={styles.contatoContainer+` flex-between`}>
                    <div className={styles.contatoWhatsApp}>
                        <IconContext.Provider value={
                            {
                                color: '#07bc4c',
                                size: 30
                            }
                        }>
                            <IoLogoWhatsapp />
                        </IconContext.Provider>
                        <p>(31) 98717-9432</p>
                        <a href="https://api.whatsapp.com/send?phone=5531987179432" className={`btn btn-wide `+styles.btnWhatsapp}>
                            <IconContext.Provider value={{ color: '#fff'}}>
                                <IoLogoWhatsapp />
                            </IconContext.Provider>
                            Whatsapp
                        </a>
                    </div>
                    <div className={styles.contatoMessenger}>
                        <IconContext.Provider value={
                            {
                                color: '#1877F2',
                                size: 30
                            }
                        }>
                            <FaFacebookMessenger />
                        </IconContext.Provider>
                        <p>@diego.koscky</p>
                        <a href="https://m.me/diego.koscky/" className={`btn btn-wide `+styles.btnMessenger}>
                            <IconContext.Provider value={{ color: '#fff'}}>
                                <FaFacebookMessenger />
                            </IconContext.Provider>
                            Messenger
                        </a>
                    </div>
                    <div className={styles.contatoEmail}>
                        <IconContext.Provider value={
                            {
                                color: '#242424',
                                size: 30
                            }
                        }>
                            <FaTelegram />
                        </IconContext.Provider>
                        <p>diego@diegokoscky.com.br</p>
                        <a href="mailto:diego@diegokoscky.com.br" className={`btn btn-wide `+styles.btnOrcamento}>
                            <IconContext.Provider value={{ color: '#fff'}}>
                                <FaTelegram />
                            </IconContext.Provider>
                            Orçamento
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}