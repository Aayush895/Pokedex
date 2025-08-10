import { useState, useEffect } from 'react'
import { fetchPokedexData } from '../../utils/fetchPokedexData'
import styles from '../../Styles/PokedexContainer.module.css'

function PokedexContainer() {
  const [btnClicked, setBtnClicked] = useState({
    next: true,
    prev: false,
  })
  const [pokedexData, setpokedexData] = useState([])
  const [pokemonInfoURL, setPokemonInfoURL] = useState([])
  const [nextPokeDataURL, setNextPokeDataURL] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  )
  const [prevPokeDataURL, setPrevPokeDataURL] = useState('')

  async function getData(URL) {
    const [response, infoURLs] = await fetchPokedexData(URL)
    setPokemonInfoURL([...infoURLs])
    setpokedexData([...response?.results])
    setNextPokeDataURL(response.next)
    setPrevPokeDataURL(response.previous)
  }

  function handlePrevPokemonData() {
    setBtnClicked({ prev: true, next: false })
  }

  function handleNexPokemonData() {
    setBtnClicked({ prev: false, next: true })
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
    <div id={styles.dexContainer}>
      {pokedexData.length > 0 &&
        pokedexData.map((pokemon, idx) => {
          return (
            <div key={idx}>
              <h1>{pokemon?.name}</h1>
            </div>
          )
        })}

      <button onClick={handlePrevPokemonData}>Prev</button>
      <button onClick={handleNexPokemonData}>Next</button>
    </div>
  )
}
export default PokedexContainer