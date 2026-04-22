import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.nav}>
            <p>Home</p>
            <p>Menu</p>
            <p>Sobre</p>
            <p>Contato</p>
        </nav>
    )
}

export default Navbar