import Banner from 'components/Banner'
import Card from 'components/Card'
import TitleSection from 'components/TitleSection'
import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'

export default function Home() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then(res => res.json())
      .then(dados => {
        setVideos(dados)
      })
  }, [])

  return (
    <>
        <Banner imageUrl="/images/banner-home.png" />
        <TitleSection>
            Um lugar para ver seus vídeos e filmes.
        </TitleSection>
        <section className={styles.container}>
            { videos.map(item => <Card key={item.id} {...item} />) }
        </section>
    </>
  )
}
