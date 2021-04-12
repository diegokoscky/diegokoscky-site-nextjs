import styles from './SEO.module.scss';
import {FcGoogle} from 'react-icons/fc';

const SEO = () => {
    return (
        <section id={styles.servicoSection} className="section">
            <div className="container section-image">
                <h3><FcGoogle /> Otimizado para o Google</h3>
                <img src="/imgs/seo.png" alt="Logo" />
                <small>
                    Seu site já sai do forno otimizado para as buscas no Google. 
                    Através de ferramentas de SEO, seu site ganha um UP nos mecanismos 
                    de busca, além de mais visibilidade e mais negócios efetivos na web.
                </small>
            </div>
        </section>
    )
}

export default SEO
