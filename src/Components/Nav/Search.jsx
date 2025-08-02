import styles from '../../Styles/Search.module.css'

function Search() {
  return (
    <div id={styles.searchContainer}>
      <input placeholder="Enter a pokemon" />
    </div>
  )
}
export default Search
