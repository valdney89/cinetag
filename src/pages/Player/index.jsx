import Banner from 'components/Banner'
import TitleSection from 'components/TitleSection'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './Player.module.scss'

export default function Player() {
    const [video, setVideo] = useState();
    const param = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:3000/videos?id=${param.id}`)
            .then(res => res.json())
            .then(dados => {
              setVideo(...dados)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <>
            <Banner imageUrl="/images/banner-player.png" />
            <TitleSection>
                Player
            </TitleSection>
            <section className={styles.container}>
                <iframe
                    src={video?.link}
                    title={video?.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                ></iframe>
            </section>
        </>
    )
}
