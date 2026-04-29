import styles from './Cardapio.module.css'

import { FaIceCream, FaBirthdayCake, FaGlassWhiskey, FaCandyCane, FaStar } from "react-icons/fa";


import pink from '../assets/pink-planet.png'
import purple from '../assets/purple-planet.png'

import { produtos, destaques } from '../data/produtos'

import { useState, useRef } from 'react'

import Card from './Card'

function Cardapio() {
    const [categoria, setCategoria] = useState("destaques"); // cards

    const listaRef = useRef(null); // btns cards

    let listaDestaques = []; 

    if (categoria === "destaques") {
        listaDestaques = produtos.filter(item => 
            destaques.includes(Number(item.id))
        );
    } else {
        listaDestaques = produtos.filter(
            (item) => item.categoria === categoria
        );
    }

    function scroll(direcao) { // botoes direita e esquerda
        if (!listaRef.current) return;

        const largura = listaRef.current.offsetWidth;

        listaRef.current.scrollBy({
            left: direcao * largura,
            behavior: "smooth"
        });
    }

    return (
        <section>
            <div className={styles.cabecalho}>
                {/* <img src={stars} className={styles.stars} /> */}
                <img src={pink} className={styles.pinkPlanet} />

                <div className={styles.titulo}>
                    <h1>Cardápio</h1>
                    <p>Doces que são de <span>outro mundo</span></p>
                </div>

                <img src={purple} className={styles.purplePlanet} />
            </div>

            <div className={styles.btns}>
                <button onClick={() => setCategoria("destaques")} className={categoria === "destaques" ? styles.ativo : ""}>
                    <FaStar />
                    Destaques
                </button>
                <button onClick={() => setCategoria("sorvetes")} className={categoria === "sorvetes" ? styles.ativo : ""}>
                    <FaIceCream />
                    Sorvetes
                </button>
                <button onClick={() => setCategoria("bolos")} className={categoria === "bolos" ? styles.ativo : ""}>
                    <FaBirthdayCake />
                    Bolos
                </button>
                <button onClick={() => setCategoria("doces")} className={categoria === "doces" ? styles.ativo : ""}>
                    <FaCandyCane />
                    Doces
                </button>
                <button onClick={() => setCategoria("bebidas")} className={categoria === "bebidas" ? styles.ativo : ""}>
                    {/* <IoCafe /> */}
                    <FaGlassWhiskey />
                    Bebidas
                </button>
            </div>

            <div className={styles.container}>
                <button className={styles.left} onClick={() => scroll(-1)}>{"<"}</button>

                <div className={styles.lista} ref={listaRef || null}>
                    {listaDestaques.map((item) => (
                        <Card 
                            key={item.id} 
                            nome={item.nome} 
                            descricao={item.descricao} 
                            preco={item.preco} 
                            img={item.img} 
                        />
                    ))} 
                </div>

                 <button className={styles.right} onClick={() => scroll(1)}>{">"}</button>           
            </div>
        </section>
    )
}

export default Cardapio