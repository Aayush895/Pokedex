import styles from '../../Styles/Navbar.module.css'

function Navbar() {
  return <div id={styles.navContainer}>
    <ul className={styles.navItems}>
      <li>COMPARE</li>
      <li>POKEMON</li>
      <li>MY LIST</li>
    </ul>
  </div>
}
export default Navbar
