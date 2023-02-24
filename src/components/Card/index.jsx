import { useFavoritosContext } from 'contexts/Favoritos'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import favorite from './favorite.png'
import favoriteOuline from './favorite_outline.png'

export default function Card({id, capa, titulo}) {

    const { favoritos, handleFavorito } = useFavoritosContext();
    const isFavorito = favoritos.some(item => item.id === id);
    const iconFavorito = isFavorito ? favorite : favoriteOuline;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/video/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img
                src={iconFavorito}
                alt=""
                className={styles.favoritar}
                onClick={() => {
                    handleFavorito(id)
                }}
            />
        </div>
    )
}
