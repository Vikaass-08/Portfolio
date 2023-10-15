import { useState } from "react";
import styles from "./about.module.css"
import ProfilePic from "../../Static/Images/ProfilePic.jpeg"
import Timeline from "../Timeline/timeline";
import Paths from "../Paths/paths";
import Heading from "../Heading/Heading";

const About = (props) => {
  const [activeButton, setActiveButton] = useState(true);

  const eduBtnAction = () => {
    setActiveButton(true)
  }
  
  const expBtnAction = () => {
    setActiveButton(false);
  }

  return (
    props.showNavbar ? 
      <Paths showNavbar={props.showNavbar} setNavbar={props.setNavbar}  /> :
      (
        <div className={styles.about}>
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
                  {EduData.map((timeline, idx) => (<Timeline key={idx} data={timeline} /> ))}
                </div>
                <div style={activeButton ? {display: "none"} : {}}>
                  {ExpData.map((timeline, idx) => (<Timeline key={idx} data={timeline} /> ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  )
}

const EduData =[
  ["July 2018 - July 2022", "Bachelor Of Technology", "St. Francis Institute Of Technology", ["Electronics and Telecommunications", "CGPA: 8.96"]],
  ["June 2016 - June 2018", "HSC", "Vidyanidhi Junior College Of Science", ["Percentage: 79.47%"]],
  ["March 2007 - March 2016", "SSC", "Smt. Rajrani Malhotra Vidyalaya", ["Percentage: 87.20%"]]
]

const ExpData =[
  ["June 2022 - Present", "Juspay", "Frontend Engineer", 
    [ "Worked on tech Such as Purescript, Javascript, React.js, Bitbucket.",
      "Developed a generic Popup Model.",
      "Worked on Test directory which has improved the development speed by 70%."
    ]
  ],
  ["June 2022 - Present", "Juspay", "Frontend Engineer", 
    [ "Worked on tech Such as Purescript, Javascript, React.js, Bitbucket.",
      "Developed a generic Popup Model.",
      "Worked on Test directory which has improved the development speed by 70%."
    ]
  ],
  ["June 2022 - Present", "Juspay", "Frontend Engineer", 
    [ "Worked on tech Such as Purescript, Javascript, React.js, Bitbucket.",
      "Developed a generic Popup Model.",
      "Worked on Test directory which has improved the development speed by 70%."
    ]
  ]
]

const aboutMe = "Goal-oriented Web Developer with strong commitment to collaboration and solutions-oriented problem-solving. Use various web design software to develop cusomer-focused websites and designs. Committed to high standards of web design, user experience, usablity and speed for multiple types of end-users. Successful at maintaining customer satisfaction through effective customer support. Solution driven professional excelling in highly collaborative work environment, finding solutions to challenges and focused on customer-satisfaction. Proven experience develping consumer-focused web sites using HTML, CSS, JQuery, PHP and Javascript. Translating solutions into code and working across many differnt Apis, third-party integrations and databases.";
const skillSet = 
  [ "Html"
  , "Css"
  , "Javascript"
  , "Java"
  , "JQuery"
  , "React.Js"
  , "Python"
  , "Django"
  , "Github"
  , "Git"
  , "Data Structures & Algorithms"
  , "Linux"
  , "PHP"
  , "Computer Networking"
  , "Operating System"
  , "SQL"
  , "Purescript"
  ]



export default About;