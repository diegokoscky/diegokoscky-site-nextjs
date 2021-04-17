import styles from './Portfolio.module.scss';

const Portfolio = () => {
    return (
        <section id="portfolio" className="section">
            <div className="container">
                <h2>Portfólio</h2>
                <p>Veja alguns dos projetos em que trabalhei:</p>

                <div className={styles.portfolioCardContainer+` flex-between`}>
                    <div className={styles.portfolioCardItem}>
                        <a href="https://finehra.com.br/" target="_blank" rel="nofollow">
                            <div className={styles.cardItemImg}>
                                <img src="/imgs/tela-finehra.png" alt="portfolio" />
                            </div>
                            <div className={styles.cardItemText}>
                                <p><strong>Finehra</strong> - A energia elétrica da sua casa de um jeito diferente.</p>
                            </div>
                        </a>
                    </div>
                    <div className={styles.portfolioCardItem}>
                        <a href="http://www.injetec.com.br/" target="_blank" rel="nofollow">
                            <div className={styles.cardItemImg}>
                                <img src="/imgs/tela-injetec.png" alt="portfolio" />
                            </div>
                            <div className={styles.cardItemText}>
                                <p><strong>Injetec</strong> - Gestão inteligente de frotas para a indústria.</p>
                            </div>
                        </a>
                    </div>                    
                    <div className={styles.portfolioCardItem}>
                        <a href="http://www.tomikoambiental.com.br/" target="_blank" rel="nofollow">
                            <div className={styles.cardItemImg}>
                                <img src="/imgs/tela-tomiko.png" alt="portfolio" />
                            </div>
                            <div className={styles.cardItemText}>
                                <p><strong>Tomiko Ambiental</strong> - Soluções ambientais e tratamento.</p>
                            </div>
                        </a>
                    </div>
                    <div className={styles.portfolioCardItem}>
                        <a href="https://emprestimofacil.com/" target="_blank" rel="nofollow">
                            <div className={styles.cardItemImg}>
                                <img src="/imgs/tela-emprestimofacil.png" alt="portfolio" />
                            </div>
                            <div className={styles.cardItemText}>
                                <p>Site do correspondente <strong>Emprestimofacil.com</strong></p>
                            </div>
                        </a>
                    </div>
                    <div className={styles.portfolioCardItem}>
                        <a href="http://proquiminas.com.br/" target="_blank" rel="nofollow">
                            <div className={styles.cardItemImg}>
                                <img src="/imgs/tela-proquiminas.png" alt="portfolio" />
                            </div>
                            <div className={styles.cardItemText}>
                                <p><strong>Proquiminas</strong> - Artefatos de borracha para indústria.</p>
                            </div>
                        </a>
                    </div>
                    <div className={styles.portfolioCardItem}>
                        <a href="https://www.minhadietacomsaude.com.br/" target="_blank" rel="nofollow">
                            <div className={styles.cardItemImg}>
                                <img src="/imgs/tela-mdcs.png" alt="portfolio" />
                            </div>
                            <div className={styles.cardItemText}>
                                <p>Blog de marketing digital <strong>Minha Dieta com Saúde.</strong></p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
