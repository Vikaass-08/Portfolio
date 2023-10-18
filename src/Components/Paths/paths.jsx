import { useState, useContext } from "react";
import styles from "./paths.module.css"
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import { Animation } from "../../Handlers/context";

const Paths = (props) => {

  const [currState, updateState] = useState(props.showNavbar);
  const {animationType, setAnimationType} = useContext(Animation);
  const navigate = useNavigate();

  const fadeInAnim = `${styles.paths} ${styles.zoomIn}`;
  const fadeOutAnim = `${styles.paths} ${styles.zoomOut}`;

  const changePath = (path) => {
    setAnimationType("");
    updateState(false); 
    setTimeout( () => {
      navigate(path); 
      props.setNavbar(false);
    }, 200);
  }

  return (
    <div className={currState ? fadeInAnim : fadeOutAnim }>
      <div className={styles.expProjCross} onClick={() => {updateState(false); setTimeout( () => {props.setNavbar(false)}, 200); } }>
        <div className={styles.expProjCrossBefore}></div>
        <div className={styles.expProjCrossAfter}></div>
      </div>
      <div className={styles.centerBack}>
        <ul>
          <div>
            <div className={styles.button}>
              <button onClick={() => changePath("/")}>Home</button>
            </div>
          </div>
          <div>
            <div className={styles.button}>
              <button onClick={() => changePath("/about")}>About</button>
            </div>
          </div>
          <div>
            <div className={styles.button}>
              <button onClick={() => changePath("/project")}>Projects</button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
};


export default Paths;