
import { useState, useContext } from "react";
import styles from "./projects.module.css"
import Card from "../Card/card";
import cardData from "../../Static/data/projectData";
import ExpandedProject from "../ExpandedProject/expandedProject";
import Paths from "../Paths/paths";
import Heading from "../Heading/Heading";
import { Animation } from "../../Handlers/context";

const Projects = (props) => {

  const [expandPopup, setPopupValue] = useState(false);
  const [ProjectData, setProjectData] = useState({});
  const {animationType} = useContext(Animation);

  const showPopupBtn = (data) => (() => {
      setProjectData(data);
      setPopupValue(true);
    })
  const fadeInAnim = `${styles.projects} ${styles.zoomIn}`;
  const normalClass = `${styles.projects}`;

  return (
    props.showNavbar ? 
      <Paths showNavbar={props.showNavbar} setNavbar={props.setNavbar}  /> :
      expandPopup ? 
        <ExpandedProject data={ProjectData} setPopupValue={setPopupValue} expAnim={expandPopup}  /> : 
        (
          <div className={animationType === "projectAnim" ? fadeInAnim : normalClass }>
            <Heading setNavbar={props.setNavbar} showNavbar={props.showNavbar} />
            <div className={styles.projectTag}>
              <h1>Recent Projects</h1>
            </div>
            <div className={styles.projectContent}>
              {
                cardData.map( data => 
                  <div key={data.title} className={styles.projectItem}>
                    <Card data={data} action={showPopupBtn(data)} />
                  </div>
                )
              }
            </div>
          </div>
        )
  )
};

export default Projects