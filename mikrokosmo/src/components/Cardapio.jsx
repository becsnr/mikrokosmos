import styles from './Cardapio.module.css'

// import { IoCafe } from "react-icons/io5";
// import { MdCandy } from "react-icons/md";
// import { FaIceCream, FaBirthdayCake, FaGlassWhiskey } from "react-icons/fa";
// import { GiMilkshake } from "react-icons/gi";


import pink from '../assets/pink-planet.png'
import purple from '../assets/purple-planet.png'
import stars from '../assets/stars.png'

import Card from './Card'

import { useNavigate } from 'react-router-dom'

function Cardapio() {
    // const navigate = useNavigate();

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

            <div className={styles.btns}>
                <button>
                    Destaques
                </button>
                <button>
                    {/* <FaIceCream /> */}
                    Sorvetes
                </button>
                <button>
                    {/* <FaBirthdayCake /> */}
                    Bolos
                </button>
                <button>
                    {/* <MdCandy /> */}
                    Doces
                </button>
                <button>
                    {/* <IoCafe /> */}
                    {/* <FaGlassWhiskey /> */}
                    Bebidas
                </button>
            </div>

            <Card />
        </section>
    )
}

export default Cardapio