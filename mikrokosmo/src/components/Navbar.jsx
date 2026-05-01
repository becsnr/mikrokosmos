import styles from './Navbar.module.css'

import Logo from './Logo';

import { FaBars, FaTimes, FaHome, FaIceCream, FaPhone } from 'react-icons/fa';

import { useState } from 'react';

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <nav className={styles.nav}>
            <Logo />

            <div className={styles.menuWrap}>

                <button className={`${styles.menuSVG} ${menuAberto ? styles.menuAtivo : ''}`} onClick={() => setMenuAberto(!menuAberto)} >
                    {menuAberto ? <FaTimes /> : <FaBars />}
                </button>

                <div className={`${styles.menu} ${menuAberto ? styles.menuAtivo : ''}`}>
                    <a className={styles.mob}>
                        <FaHome />
                    </a>
                    <a className={styles.mob}>
                        <FaIceCream />
                    </a>
                    <a className={styles.mob}>
                        <FaPhone />
                    </a>
                
                    <a className={styles.desk}>
                        Home
                    </a>
                    <a className={styles.desk}>
                        Menu
                    </a>
                    <a className={styles.desk}>
                        Sobre
                    </a>
                    <a className={styles.desk}>
                        Contato
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar