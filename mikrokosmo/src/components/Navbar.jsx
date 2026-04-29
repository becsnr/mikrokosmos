import styles from './Navbar.module.css'

import Logo from './Logo';

import { FaBars } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className={styles.nav}>
            <Logo />

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