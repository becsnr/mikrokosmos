import styles from './Home.module.css'

import planeta from '../assets/logo-planeta.png'
import ice from '../assets/ice-cream-home.png'

function Home() {
    return (
        <>
            <section id='home' className={styles.home}>
                <div className={styles.container}>
                    <h1 className={styles.titulo}>
                        Mikrokosm
                        <span className={styles.planeta}>
                            <img src={planeta} alt="" />
                            <span className={styles.star1}></span>
                        </span>
                        s
                    </h1>
                    <h2 className={styles.subtitulo}>
                        <span></span>
                        <p>sweets</p>
                        <span></span>
                    </h2>
                    {/* <span className={styles.star2}></span> */}
                </div>

                <div className={styles.imagem}>
                    <img src={ice} alt="" />
                </div>
            </section>
        </>
    )
}

export default Home