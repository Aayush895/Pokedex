import styles from '../Styles/Container.module.css'

function Container() {
  return (
    <div id={styles.rootContainer}>
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
    </div>
  )
}
export default Container
