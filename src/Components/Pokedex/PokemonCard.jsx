import styles from '../../Styles/PokemonCard.module.css'

function PokemonCard({ name, information }) {
  return (
    <div id={styles.cardContainer}>
      <h1>{name}</h1>
      <img src={information?.sprites?.other?.home?.front_shiny} />

      <div id={styles.typeContainer}>
        {information?.types?.length > 0 &&
          information?.types.map((t) => {
            return (
              <div key={t?.slot} id={styles.type}>
                <p>{t?.type?.name}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}
export default PokemonCard
