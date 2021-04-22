import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import styles from './Hero.module.scss';
import { IconContext } from 'react-icons/lib';

const Hero = () => {
    return (
        <IconContext.Provider value={
            {
                color: '#fff',
                size: 17
            }
        }>
            <section id="hero" className={`section `+styles.heroSection}>
                <div className="container">
                    <h1>Diego Koscky</h1>
                    <h2>Web Design | Marketing Digital</h2>
                    <div className={ styles.heroContainer+` flex-between` }>
                        <div className="flex-center">
                            <div className={styles.heroIcon+` flex-center`}>
                                <FaPhoneAlt />
                            </div>
                            <div className={styles.heroText+` flex-start`}>
                                <p>(31) 98717-9432</p>
                            </div>
                        </div>
                        <div className="flex-center">
                        <div className={styles.heroIcon+` flex-center`}>
                                <FaEnvelope />
                            </div>
                            <div className={styles.heroText+` flex-start`}>
                                <p>diego@diegokoscky.com.br</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </IconContext.Provider>
    )
}

export default Hero
