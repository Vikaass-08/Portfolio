import { useState } from "react"
import styles from "./navbar.module.css"

const Navbar = (props) => {

  const [anim, setAnim] = useState(true);
  const showCrossBar = () => {
    setAnim(!anim);
    props.setNavbar(true);
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.circleNav} onClick={showCrossBar}>
        <div className={anim ? styles.one : styles.hoverOne}></div>
        <div className={anim ? styles.two : styles.hoverTwo}></div>
        <div className={anim ? styles.three : styles.hoverThree}></div>
      </div>
    </div>
  )
}

export default Navbar;