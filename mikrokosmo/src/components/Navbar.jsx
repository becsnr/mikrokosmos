import styles from './Navbar.module.css'

import planeta from '../assets/logo-planeta.png'

import { FaBars } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className={styles.nav}>
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

            <div className={styles.menuSVG}><FaBars /></div>
            <div className={styles.menu}>
                
                <p>Home</p>
                <p>Menu</p>
                <p>Sobre</p>
                <p>Contato</p>
            </div>
        </nav>
    )
}

export default Navbar