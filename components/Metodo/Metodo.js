import styles from './Metodo.module.scss';
import { RiFocus2Line, RiRefreshLine } from "react-icons/ri";
import { FaRegSmile } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Metodo = () => {
    return (
        <IconContext.Provider value={
            {
                color: '#242424',
                size: 28
            }
        }>
            <section id="metodo" className="section">
                <div className="container">
                    <h2>Método</h2>
                    <p>
                        Olá! Eu sou o Diego. Além de ser empreendedor digital, atuo como <strong>web designer </strong>
                        freelancer na região de BH. Especializado na <strong>criação de sites</strong> e <strong>soluções web 
                        personalizadas</strong> para diferenciar você dos seus concorrentes e aumentar o <strong>lucro</strong> 
                        do seu negócio. Mais credibilidade para a sua empresa!
                    </p>

                    <div className={styles.metodoContainer}>
                        <div>
                            <RiFocus2Line />
                            <h3>Missão</h3>
                            <p>
                                Meu objetivo é fazer com que sua empresa alcance novos clientes 
                                através de projetos criativos e arrojados. Seu negócio na 
                                internet com a sua cara!
                            </p>
                        </div>
                        <div>
                            <FaRegSmile />
                            <h3>Filosofia</h3>
                            <p>
                                
                                Sou muito motivado a superar os desafios de cada projeto, 
                                sempre dando o meu melhor. Estou sempre de olho no que há 
                                de melhor em novas tecnologias para poder aplicá-las.
                            </p>
                        </div>
                        <div>
                            <RiRefreshLine />
                            <h3>Processo</h3>
                            <p>
                                Sou perfeccionista. Dou o meu máximo para deixar tudo impecável 
                                e tornar o projeto melhor do que foi solicitado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </IconContext.Provider>
    )
}

export default Metodo
