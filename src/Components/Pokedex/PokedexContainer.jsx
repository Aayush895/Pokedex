import { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import { fetchPokedexData } from '../../utils/fetchPokedexData'
import pokeballLoader from '/images/pokeball-loader.gif'
import styles from '../../Styles/PokedexContainer.module.css'

function PokedexContainer() {
  const [btnClicked, setBtnClicked] = useState({
    next: true,
    prev: false,
  })
  const [isLoading, setisLoading] = useState(true)
  const [pokemon, setPokemon] = useState([])
  const [nextPokeDataURL, setNextPokeDataURL] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  )
  const [prevPokeDataURL, setPrevPokeDataURL] = useState(null)

  async function getData(URL) {
    const [response, pokemon] = await fetchPokedexData(URL)
    setPokemon([...pokemon])
    setNextPokeDataURL(response.next)
    setPrevPokeDataURL(response.previous)
    setisLoading(false)
  }

  function handlePrevPokemonData() {
    setBtnClicked({ prev: true, next: false })
    setisLoading(true)
  }

  function handleNexPokemonData() {
    setBtnClicked({ prev: false, next: true })
    setisLoading(true)
  }

  useEffect(() => {
    let URL = null
    if (
      (btnClicked.next == false && btnClicked.prev == false) ||
      (btnClicked.next == true && btnClicked.prev == false)
    ) {
      URL = nextPokeDataURL
    } else {
      URL = prevPokeDataURL
    }

    getData(URL)
  }, [btnClicked, setBtnClicked])
  return (
    <>
      <div id={styles.dexContainer}>
        {isLoading ? (
          <img src={pokeballLoader} alt="loader-gif" />
        ) : (
          pokemon.length > 0 &&
          pokemon.map((pokemon) => {
            return (
              <div key={pokemon?.information?.id} id={styles.cardContainer}>
                <PokemonCard
                  name={pokemon?.name}
                  information={pokemon?.information}
                />
              </div>
            )
          })
        )}
      </div>
      <div id={styles.btnContainer}>
        <button
          onClick={handlePrevPokemonData}
          disabled={prevPokeDataURL == null && true}
        >
          Prev
        </button>
        <button
          onClick={handleNexPokemonData}
          disabled={nextPokeDataURL == null && true}
        >
          Next
        </button>
      </div>
    </>
  )
}
export default PokedexContainer
