import styles from './Home.module.css'

import ice from '../assets/ice-cream-home.png'

function Home() {
    return (
        <>
            <section id='home' className={styles.home}>
                <div className={styles.container}>
                    
                </div>

                <div className={styles.imagem}>
                    <img src={ice} alt="" />
                </div>
            </section>
        </>
    )
}

export default Home