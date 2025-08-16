import styles from '../../Styles/PokemonCard.module.css'

function PokemonCard({name, information}) {
  return (
    <div id={styles.cardContainer}>
      <h1>{name}</h1>
      <img src={information?.sprites?.other?.home?.front_shiny}/>
    </div>
  )
}
export default PokemonCard