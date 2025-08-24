import { useParams } from 'react-router'
import { usePokemonDetails } from '../hooks/usePokemonDetails'
import styles from '../../Styles/PokemonDetails.module.css'

function PokemonDetails({pokemonName = ''}) {
  const { id } = useParams()
  const pokemonDetails = usePokemonDetails(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName ? pokemonName : id}`
  )

  return (
    <div id={styles.detailsContainer}>
      <h1>Height: {pokemonDetails?.height}</h1>
      <h1>Weight: {pokemonDetails?.weight}</h1>
      {pokemonDetails?.abilities?.map((ability) => {
        return (
          <div key={ability?.ability?.url} id={styles.ability}>
            <h1>{ability?.ability?.name}</h1>
          </div>
        )
      })}
    </div>
  )
}
export default PokemonDetails
