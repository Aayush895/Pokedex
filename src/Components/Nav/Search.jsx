import { useDebounce } from '../hooks/useDebounce'
import styles from '../../Styles/Search.module.css'

function Search({ setSearchTerm }) {
  function updatePokemonName(name) {
    setSearchTerm(name)
  }

  const debounceSearchUpdate = useDebounce((e) =>
    updatePokemonName(e.target.value)
  )
  return (
    <div id={styles.searchContainer}>
      <input
        placeholder="Enter a pokemon"
        onChange={debounceSearchUpdate}
      />
    </div>
  )
}
export default Search
