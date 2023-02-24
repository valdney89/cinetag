import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import FavoritosProvider from 'contexts/Favoritos'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PageDefault() {
  return (
    <main>
        <Header />
        <FavoritosProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritosProvider>
        <Footer />
    </main>
  )
}
