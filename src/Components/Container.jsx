import { useState } from 'react'
import Navbar from './Nav/Navbar'
import Search from './Nav/Search'
import PokedexContainer from './Pokedex/PokedexContainer'
import PokemonDetails from './Pokedex/PokemonDetails'
import styles from '../Styles/Container.module.css'

function Container() {
  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <>
      <div id={styles.rootContainer}>
        <Navbar />

        <div className={styles.containerGrids1}></div>
        <div className={styles.containerGrids2}></div>
        <div className={styles.containerGrids3}></div>
        <div className={styles.containerGrids4}></div>

        <img
          src="images/pokeball-icon.png"
          alt="pokeball"
          className={styles.pokeballLogo1}
        />
        <img
          src="images/pokeball-icon.png"
          alt="pokeball"
          className={styles.pokeballLogo2}
        />
        <img
          src="images/pokeball-icon.png"
          alt="pokeball"
          className={styles.pokeballLogo3}
        />
        <img
          src="images/pokeball-icon.png"
          alt="pokeball"
          className={styles.pokeballLogo4}
        />

        <Search setSearchTerm={setSearchTerm} />
        {!searchTerm ? <PokedexContainer /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
      </div>
    </>
  )
}
export default Container
