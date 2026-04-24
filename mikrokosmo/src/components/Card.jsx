import styles from './Card.module.css'

function Card( { nome, preco, img, descricao } ) {
    return (
        <div className={styles.card}>
            <div className={styles.imgCard}>
                <img src={img} />
            </div>
            <h3>{nome}</h3>
            <p className={styles.sobre}>{descricao}</p>
            <p className={styles.preco}>R$ {preco}</p>
        </div>
    )
}

export default Card