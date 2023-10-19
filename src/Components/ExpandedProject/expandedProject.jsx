import { useState } from "react";
import styles from "./expandedProject.module.css"
import BouncyButton from "../Button/bouncyButton";

const ExpandedProject = (props) => {


  const [currState, updateState] = useState(props.expAnim);

  const hideDiv = (value) => {
    if(value === undefined) return {display: "none"};
    return {};
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
        <h1 className={styles.projTitle}> {props.data.title} </h1>
      </div>
      <div className={styles.expProjDescription} style={hideDiv(props.data.description)}>
        {
          props.data.description.map((val) => 
            <dd key={val} >{val}</dd>
          )
        }
      </div>
      <div className={styles.expProjInfo} style={hideDiv(props.data.techUsed)}>
        {
          props.data.techUsed.map((val, idx) => (
            <span key={idx} className={styles.skill}>{val}</span>
          ))
        }
      </div>
      <div className={styles.expProjButton}>
        <div style={hideDiv(props.data.live)} className={styles.expProjLiveBtn}>
          <BouncyButton onClickAction={action(props.data.live)} buttonText="View Project" />
        </div>
        <div style={hideDiv(props.data.github)} className={styles.expProjGithubBtn}>
          <BouncyButton onClickAction={action(props.data.github)} buttonText="Github" />
        </div>
      </div>
    </div>
  )
};

export default ExpandedProject;