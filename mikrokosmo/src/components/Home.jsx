import styles from './Home.module.css'

import ice from '../assets/ice-star.png'

function Home() {
    return (
        <>
            <section id='home' className={styles.home}>
                <div className={styles.imagem}>
                    <img src={ice} alt="" />
                </div>
                
                <div className={styles.slogan}>
                    <h1>Doces que são de <span>outro mundo</span></h1>

                    <p>Sorvetes artesanais, sobremesas irresistíveis e muito sabor em cada detalhe.</p>

                    <button>Ver cardápio</button>
                </div>
            </section>
        </>
    )
}

export default Home