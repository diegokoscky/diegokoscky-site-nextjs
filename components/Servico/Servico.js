import styles from './Servico.module.scss';
import {AiOutlineMobile} from 'react-icons/ai';

const Servico = () => {
    return (
        <section id={styles.servicoSection} className="section">
            <div className="container">
                <h2>Serviço</h2>
                <p>
                    Desenvolvimento de <strong>sites</strong>, criação de <strong>landing pages</strong> e serviços de <strong>marketing 
                    digital</strong> diferenciados. Que tal levarmos o seu negócio para um novo patamar? 
                    Ganhe <strong>mais visibilidade</strong>, traga sua empresa para a web!
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
