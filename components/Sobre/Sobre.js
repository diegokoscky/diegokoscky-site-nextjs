import styles from './Sobre.module.scss';
import {BsCardChecklist} from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';

export default function Sobre() {
    return (
        <section id="sobre" className="section">
            <div className="container">
                <div className={styles.sobreImg}>
                    <img src="/imgs/profile.jpg" alt="Diego" />
                </div>
                <div>
                    <p>
                        Sou <strong>Bacharel</strong> em Sistemas de Informação, <strong>Empreendedor Digital</strong> e 
                        <strong>Web Designer Freelancer</strong>. Resido na região de Belo Horizonte, MG.
                    </p>
                </div>
                <div className={styles.sobreDetalhes+` flex-between`}>
                    <div>
                        <h3><BsCardChecklist /> Habilidades</h3>
                        <div>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>Web Design</span>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>UX/UI</span>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>Front-End</span>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>Javascript</span>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>React.js</span>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>SEO</span>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>Copywriting</span>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>Google Analytics</span>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>Wordpress</span>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>Marketing Digital</span>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>Marketing de Conteúdo</span>
                            <span className={styles.sobreHabilidades+` btn btn-primary`}>Inbound Marketing</span>
                        </div>
                    </div>
                    <div>
                        <h3><FiLinkedin /> Linkedin</h3>
                        <div>
                            <small>
                                Veja meu histórico profissional, habilidades e outras 
                                informações sobre mim no meu perfil público no Linkedin.
                            </small>
                            <a href="https://br.linkedin.com/in/diegokoscky" className="btn btn-primary" target="_blank">
                                Meu Perfil no Linkedin
                            </a>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
    )
}