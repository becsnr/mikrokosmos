import styles from './Navbar.module.css'

import Logo from './Logo';

import { FaBars, FaTimes, FaHome, FaIceCream, FaPhone } from 'react-icons/fa';

import { useEffect, useRef, useState } from 'react';

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const menuRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target) && btnRef.current && !btnRef.current.contains(e.target)) {
                setMenuAberto(false);
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <Logo />

            <div className={styles.menuWrap}>

                <button ref={btnRef} className={`${styles.menuSVG} ${menuAberto ? styles.menuAtivo : ''}`} onClick={() => setMenuAberto(!menuAberto)} >
                    {menuAberto ? <FaTimes /> : <FaBars />}
                </button>

                <div ref={menuRef} className={`${styles.menu} ${menuAberto ? styles.menuAtivo : ''}`}>
                    <a href='#home' className={styles.mob}>
                        <FaHome />
                    </a>
                    <a href='#cardapio' className={styles.mob}>
                        <FaIceCream />
                    </a>
                    <a href='#dados' className={styles.mob}>
                        <FaPhone />
                    </a>
                
                    <a href='#home' className={styles.desk}>
                        Home
                    </a>
                    <a href='#cardapio' className={styles.desk}>
                        Menu
                    </a>
                    <a href='#dados' className={styles.desk}>
                        Sobre
                    </a>
                    <a href='#dados' className={styles.desk}>
                        Contato
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar