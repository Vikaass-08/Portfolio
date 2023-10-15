import { useState } from "react";
import styles from "./homepage.module.css"
import ProfilePic from "../../Static/Images/ProfilePic.jpeg"
import Button from "../Button/button";
import Paths from "../Paths/paths";
import { useNavigate } from "react-router-dom";
import Heading from "../Heading/Heading";

const Homepage = (props) => {

  const navigate = useNavigate();
  const [currState, updateState] = useState(false);

  const AboutMeAction = () => {
    updateState(true);
    setTimeout(() => {
      navigate("/about");
    }, 300);
  }
  const ContactMeAction = () => {}

  const fadeOutAnim = `${styles.homePage} ${styles.zoomOut}`;
  const fadeInAnim = `${styles.homePage}`;

  return (
    props.showNavbar ? 
      <Paths showNavbar={props.showNavbar} setNavbar={props.setNavbar}  /> :
      (
        <div  className={currState ? fadeOutAnim : fadeInAnim }>
          <Heading setNavbar={props.setNavbar} showNavbar={props.showNavbar} />
          <div className={styles.homeBody}>
            <div className={styles.homeBodyLeftSide}>
              <p>Hello, I'm</p>
              <h1>vikas pathak</h1>
              <h2>full stack Web Developer</h2>
              <div className={styles.homeBodyButton}>
                  <div className={styles.buttonOne}>
                    <Button onClickAction={AboutMeAction} buttonText="About Me" />
                  </div>
                  <div className={styles.buttonTwo}>
                    <Button onClickAction={ContactMeAction} buttonText="Contact Me" />
                  </div>
              </div>
            </div>
            <div className={styles.homeBodyRightSide}>
              <div className={styles.profilePicBox}>
                <img src={ProfilePic} alt="profile-img"/>
              </div>
            </div>
          </div>
        </div>
      )
  );
}

export default Homepage;