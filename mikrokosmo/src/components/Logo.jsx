import styles from './Logo.module.css'

import planeta from '../assets/logo-planeta.png'

function Logo() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.titulo}>
                    Mikrokosm
                    <span className={styles.planeta}>
                        <img src={planeta} alt="" />
                    </span>
                    s
                </h1>
                <h2 className={styles.subtitulo}>
                    <span></span>
                    <p>sweets</p>
                    <span></span>
                </h2>
            </div>
        </>
    )
}

export default Logo