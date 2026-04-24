import styles from './Cardapio.module.css'

import pink from '../assets/pink-planet.png'
import purple from '../assets/purple-planet.png'
import stars from '../assets/stars.png'

function Cardapio() {
    return (
        <section>
            <div className={styles.cabecalho}>
                <img src={stars} className={styles.stars} />
                <img src={pink} className={styles.pinkPlanet} />

                <div className={styles.titulo}>
                    <h1>Cardápio</h1>
                    <p>Doces que são de <span>outro mundo</span></p>
                </div>

                <img src={purple} className={styles.purplePlanet} />
            </div>
        </section>
    )
}

export default Cardapio