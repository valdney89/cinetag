import Banner from 'components/Banner'
import TitleSection from 'components/TitleSection'
import React from 'react'
import styles from './Favoritos.module.scss'

import Card from 'components/Card'
import { useFavoritosContext } from 'contexts/Favoritos'

export default function Favoritos() {

  const { favoritos } = useFavoritosContext()

  return (
    <>
      <Banner imageUrl="/images/banner-favoritos.png" />
      <TitleSection>
          Meus Favoritos.
      </TitleSection>
      <section className={styles.container}>
        {
          favoritos.length 
          ? favoritos.map(item => <Card key={item.id} {...item} />)
          : <p>Nenhum item adicionado em favoritos</p>
        }
      </section>
    </>
  )
}
