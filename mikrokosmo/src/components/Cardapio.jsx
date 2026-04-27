import styles from './Cardapio.module.css'

// import { IoCafe } from "react-icons/io5";
// import { MdCandy } from "react-icons/md";
// import { FaIceCream, FaBirthdayCake, FaGlassWhiskey } from "react-icons/fa";
// import { GiMilkshake } from "react-icons/gi";


import pink from '../assets/pink-planet.png'
import purple from '../assets/purple-planet.png'
import stars from '../assets/stars.png'

import { produtos } from '../data/produtos'

import { useState, useRef } from 'react'

import Card from './Card'

function Cardapio() {
    const [categoria, setCategoria] = useState(""); // cards
    const listaRef = useRef(null); // btns cards

    const filtrar = produtos.filter( // cards
        (item) => item.categoria === categoria
    );

    function scroll(direcao) { // botoes direita e esquerda
        const largura = listaRef.current.offsetWidth;

        if (!listaRef.current) return;

        listaRef.current.scrollBy({
            left: direcao * largura,
            behavior: "smooth"
        });
    }

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
                <button onClick={() => setCategoria("destaques")} className={categoria === "destaques" ? styles.ativo : ""}>
                    Destaques
                </button>
                <button onClick={() => setCategoria("sorvetes")} className={categoria === "sorvetes" ? styles.ativo : ""}>
                    {/* <FaIceCream /> */}
                    Sorvetes
                </button>
                <button onClick={() => setCategoria("bolos")} className={categoria === "bolos" ? styles.ativo : ""}>
                    {/* <FaBirthdayCake /> */}
                    Bolos
                </button>
                <button onClick={() => setCategoria("doces")} className={categoria === "doces" ? styles.ativo : ""}>
                    {/* <MdCandy /> */}
                    Doces
                </button>
                <button onClick={() => setCategoria("bebidas")} className={categoria === "bebidas" ? styles.ativo : ""}>
                    {/* <IoCafe /> */}
                    {/* <FaGlassWhiskey /> */}
                    Bebidas
                </button>
            </div>

            <div className={styles.container}>
                <button className={styles.left} onClick={() => scroll(-1)}>{"<"}</button>

                <div className={styles.lista} ref={listaRef}>
                    {filtrar.map((item) => (
                        <Card key={item.id} nome={item.nome} descricao={item.descricao} preco={item.preco} img={item.img} />
                    ))}
                </div>

                 <button className={styles.right} onClick={() => scroll(1)}>{">"}</button>           
            </div>
        </section>
    )
}

export default Cardapio