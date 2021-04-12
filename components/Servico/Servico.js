import styles from './Servico.module.scss';
import {AiOutlineMobile} from 'react-icons/ai';

const Servico = () => {
    return (
        <section id={styles.servicoSection} className="section">
            <div className="container">
                <h2>Serviço</h2>
                <p>
                    Desenvolvimento de sites, criação de landing pages e serviços de marketing 
                    digital diferenciados. Que tal levarmos o seu negócio para um novo patamar? 
                    Ganhe mais visibilidade, traga sua empresa para a web!
                </p>
            </div>
            <div className="container section-image">
                <h3><AiOutlineMobile /> Responsividade</h3>
                <img src="/imgs/responsivity.png" alt="Logo" />
                <small>
                    Não importa o dispositivo. Seja desktop, notebook, tablet ou smartphone, 
                    seu site se adaptará em todas as telas.
                </small>
            </div>
        </section>
    )
}

export default Servico
