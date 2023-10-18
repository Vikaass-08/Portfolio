import { useContext, useState } from "react";
import styles from "./about.module.css"
import ProfilePic from "../../Static/Images/ProfilePic.jpeg"
import Timeline from "../Timeline/timeline";
import Paths from "../Paths/paths";
import Heading from "../Heading/Heading";
import { Animation } from "../../Handlers/context";
import { EduData, aboutMe, skillSet, ExpData } from "../../Static/data/aboutData";

const About = (props) => {
  const [activeButton, setActiveButton] = useState(true);
  const {animationType} = useContext(Animation);

  const eduBtnAction = () => {
    setActiveButton(true);
  }
  
  const expBtnAction = () => {
    setActiveButton(false);
  }

  const fadeInAnim = `${styles.about} ${styles.zoomIn}`;
  const normalClass = `${styles.about}`;

  return (
    props.showNavbar ? 
      <Paths showNavbar={props.showNavbar} setNavbar={props.setNavbar}  /> :
      (
        <div className={animationType === "aboutAnim" ? fadeInAnim : normalClass }>
          <Heading setNavbar={props.setNavbar} showNavbar={props.showNavbar} />
          <div className={styles.aboutHeading}>
            <h2>about me</h2>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutContentLeftSide}>
              <div className={styles.imageBox}>
                <img src={ProfilePic} alt="Profile Pic" />
              </div>
            </div>
            <div className={styles.aboutContentRightSide}>
              <div className = {styles.aboutUs} >
                <p>{aboutMe}</p>
              </div>
              <div className= {styles.skillSets}>
                <div className={styles.skillHead}>Skills</div>
                <div>
                  {
                    skillSet.map((skill, idx) => (
                      <span key={idx} className={styles.skill}>
                        {skill}
                      </span>
                    ))
                  }
                </div>
              </div>
              <div className={styles.educationExperience}>
                <div className={styles.aboutTabs}>
                  <button id={styles.eduBtn} className={activeButton ? styles.active : styles.empty} onClick={eduBtnAction}> Education </button>
                  <button id={styles.expBtn} className={!activeButton ? styles.active : styles.empty} onClick={expBtnAction}> Work Experience </button>
                </div>
                <div style={!activeButton ? {display: "none"} : {}}>
                  {Object.keys(EduData).map((key, index) => {
                    return (
                      <Timeline key={EduData[key].id} data={EduData[key]} />
                    );
                  })}
                </div>
                <div style={activeButton ? {display: "none"} : {}}>
                  {Object.keys(ExpData).map((key, index) => {
                    return (
                      <Timeline key={ExpData[key].id} data={ExpData[key]} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  )
}



export default About;