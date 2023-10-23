import { useState, useContext } from "react";
import styles from "./paths.module.css"
import { useNavigate } from "react-router-dom";
import { Animation } from "../../Handlers/context";

const Paths = (props) => {
  const {setAnimationType, setNavbar, showNavbar} = useContext(Animation);
  const [currState, updateState] = useState(showNavbar);
  const navigate = useNavigate();

  const fadeInAnim = `${styles.paths} ${styles.zoomIn}`;
  const fadeOutAnim = `${styles.paths} ${styles.zoomOut}`;

  const changePath = (path) => {
    setAnimationType("");
    updateState(false); 
    setTimeout( () => {
      navigate(path); 
      setNavbar(false);
    }, 200);
  }

  return (
    <div className={currState ? fadeInAnim : fadeOutAnim }>
      <div className={styles.expProjCross} onClick={() => {updateState(false); setTimeout( () => {setNavbar(false)}, 200); } }>
        <div className={styles.expProjCrossBefore}></div>
        <div className={styles.expProjCrossAfter}></div>
      </div>
      <div className={styles.centerBack}>
        <div className={styles.button}>
          <button onClick={() => changePath("/")}>HOME</button>
        </div>
        <div className={styles.button}>
          <button onClick={() => changePath("/about")}>ABOUT ME</button>
        </div>
        <div className={styles.button}>
          <button onClick={() => changePath("/project")}>PROJECTS</button>
        </div>
      </div>
    </div>
  )
};


export default Paths;