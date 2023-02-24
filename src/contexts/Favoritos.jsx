import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{favoritos, setFavoritos}}
        >
            {children}
        </FavoritosContext.Provider>
    )
}

export const useFavoritosContext = () => {
    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const [ videos, setVideos ] = useState([]);

    fetch('http://localhost:3000/videos')
      .then(res => res.json())
      .then(dados => {
        setVideos(dados)
      })

    function handleFavorito(id) {
        const isFavoritoRepetido = favoritos.some(item => item.id === id);
        const novoFavorito = videos.find(item => item.id === id)

        if(!isFavoritoRepetido) {
            return setFavoritos(prev => [...prev, novoFavorito])
        } 
        
        return setFavoritos(prev => prev.filter((item) => item.id !== id))
    }

    return {
        favoritos,
        handleFavorito
    }
}