import { useState } from "react";
import styles from "./expandedProject.module.css"
import Button from "../Button/button";

const ExpandedProject = (props) => {


  const [currState, updateState] = useState(props.expAnim);

  const hideBtn = {
    display: "none"
  }

  const fadeInAnim = `${styles.ExpProject} ${styles.zoomIn}`;
  const fadeOutAnim = `${styles.ExpProject} ${styles.zoomOut}`;

  const action = (link) => () => {window.open(link, '_blank', 'noopener,noreferrer');};

  return (
    <div className={currState ? fadeInAnim : fadeOutAnim }>
      <div className={styles.expProjCross} onClick={() => {updateState(false); setTimeout( () => {props.setPopupValue(false)}, 200); } }>
        <div className={styles.expProjCrossBefore}></div>
        <div className={styles.expProjCrossAfter}></div>
      </div>
      <div className={styles.imageView}>
        <img src={props.data.imgUrl} alt={props.data.imgAlt} />
      </div>
      <div className={styles.expProjTitle}>
        <h1> {props.data.title} </h1>
      </div>
      <div className={styles.expProjDescription}>
        <p> {props.data.description} </p>
      </div>
      <div className={styles.expProjInfo}>
        <h2>Tech Used: &nbsp; <span>{props.data.techUsed}</span> </h2>
      </div>
      <div className={styles.expProjButton}>
        <div style={ props.data.live === undefined ? hideBtn : {}} className={styles.expProjLiveBtn}>
          <Button onClickAction={action(props.data.live)} buttonText="View Project" />
        </div>
        <div style={props.data.github === undefined ? hideBtn : {}} className={styles.expProjGithubBtn}>
          <Button onClickAction={action(props.data.live)} buttonText="Github" />
        </div>
      </div>
    </div>
  )
};

export default ExpandedProject;