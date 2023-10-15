import { useState } from "react";
import styles from "./paths.module.css"
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";

const Paths = (props) => {

  const [currState, updateState] = useState(props.showNavbar);
  const navigate = useNavigate();

  const fadeInAnim = `${styles.paths} ${styles.zoomIn}`;
  const fadeOutAnim = `${styles.paths} ${styles.zoomOut}`;

  return (
    <div className={currState ? fadeInAnim : fadeOutAnim }>
      <div className={styles.expProjCross} onClick={() => {updateState(false); setTimeout( () => {props.setNavbar(false)}, 200); } }>
        <div className={styles.expProjCrossBefore}></div>
        <div className={styles.expProjCrossAfter}></div>
      </div>
      <div className={styles.centerBack}>
      <Button onClickAction={() => {updateState(false); setTimeout( () => {navigate("/"); props.setNavbar(false);}, 200);}} buttonText="Home" />
      <Button onClickAction={() => {updateState(false); setTimeout( () => {navigate("/about"); props.setNavbar(false);}, 200);}} buttonText="About" />
      <Button onClickAction={() => {updateState(false); setTimeout( () => {navigate("/project"); props.setNavbar(false);}, 200);}} buttonText="Project" />
      </div>
    </div>
  )
};


export default Paths;