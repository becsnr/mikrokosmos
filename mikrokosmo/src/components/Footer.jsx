import styles from './Footer.module.css'

import { FaInstagram, FaWhatsapp, FaTiktok, FaPhone, FaEnvelope } from "react-icons/fa";

import Logo from "./Logo"

function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.sobre}>
                    <Logo />
                    <p className={styles.sub}>Transformamos momentos em doces lembranças.</p>
                    <div className={styles.icons}>
                        <span><FaInstagram /></span>
                        <span><FaWhatsapp /></span>
                        <span><FaTiktok /></span>
                    </div>
                </div>
                <div className={styles.navegar}>
                    <h2>Navegação</h2>
                    <p>Home</p>
                    <p>Sobre</p>
                    <p>Cardápio</p>
                    <p>Contato</p>
                </div>
                <div className={styles.contato}>
                    <h2>Contato</h2>
                    <p><span><FaPhone /></span> (55) 12345-6789</p>
                    <p><span><FaInstagram /></span> @mikrokosmosweets</p>
                    <p><span><FaEnvelope /></span> contato@mikrokosmo.com</p>
                </div>
            </div>
            <p className={styles.rodape}> &copy; 2026 Mikrokosmo Sweets.</p>
        </footer>
    )
}

export default Footer