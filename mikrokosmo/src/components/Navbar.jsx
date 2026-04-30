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

                <button className={styles.menuSVG} onClick={() => setMenuAberto(!menuAberto)} >
                    {menuAberto ? <FaTimes /> : <FaBars />}
                </button>

                <div className={`${styles.menu} ${menuAberto ? styles.menuAtivo : ''}`}>
                    <FaHome />
                    <FaIceCream />
                    <FaPhone />
                
                    <a>Home</a>
                    <a>Menu</a>
                    <a>Sobre</a>
                    <a>Contato</a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar