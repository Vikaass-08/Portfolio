import { useState, useContext } from "react";
import styles from "./homepage.module.css"
import ProfilePic from "../../Static/Images/ProfilePic.jpeg"
import Paths from "../Paths/paths";
import { useNavigate } from "react-router-dom";
import Heading from "../Heading/Heading";
import { Animation } from "../../Handlers/context";
import BouncyButton from "../Button/bouncyButton";

const Homepage = (props) => {

  const navigate = useNavigate();
  const [currState, updateState] = useState(false);
  const {setAnimationType, showNavbar, setNavbar} = useContext(Animation);

  const AboutMeAction = () => {
    updateState(true);
    setAnimationType("aboutAnim");
    navigate("/about");
  }
  const ViewProjectAction = () => {
    updateState(true);
    setAnimationType("projectAnim");
    navigate("/project");
  }

  const fadeOutAnim = `${styles.homePage} ${styles.zoomOut}`;
  const fadeInAnim = `${styles.homePage}`;

  return (
    showNavbar ? 
      <Paths/> :
      (
        <div  className={currState ? fadeOutAnim : fadeInAnim }>
          <Heading setNavbar={setNavbar}/>
          <div className={styles.homeBody}>
            <div className={styles.homeBodyLeftSide}>
              <p>Hello, I'm</p>
              <h1>vikas pathak</h1>
              <h2>full stack Web Developer</h2>
              <div className={styles.homeBodyButton}>
                <div className={styles.buttonOne}>
                  <BouncyButton onClickAction={AboutMeAction} buttonText="ABOUT ME" />
                </div>
              </div>
              <div className={styles.homeBodyButton}>
                <div className={styles.buttonTwo}>
                  <BouncyButton onClickAction={ViewProjectAction} buttonText="VIEW PROJECTS" />
                </div>
              </div>
            </div>
            <div className={styles.homeBodyRightSide}>
              <div className={styles.profilePicBox}>
                <img src={ProfilePic} alt="profile-img"/>
              </div>
            </div>
          </div>
          <div className={styles.sites}>
                <a href="https://www.linkedin.com/in/vikaass08/" target="_blank" rel="noreferrer">
                  <div className={styles.socialSite}>
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg>
                  </div>
                </a>
                <a href="https://github.com/Vikaass-08" target="_blank" rel="noreferrer">
                  <div className={styles.socialSite}>
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
                  </div>
                </a>
                <a href="https://medium.com/@pathakvikas190" target="_blank" rel="noreferrer">
                  <div className={styles.socialSite}>
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="medium"><path d="M21.20905,6.41669H22V4.08331H14.51978l-2.48584,9.16663h-.068L9.50269,4.08331H2V6.41663h.76837A.89578.89578,0,0,1,3.5,7.11139v9.83032a.84093.84093,0,0,1-.73163.6416H2v2.33338H8V17.58331H6.5V7.25h.08752L10.0451,19.91669h2.712L16.25989,7.25h.07355V17.58331H14.83337v2.33338H22V17.58331h-.79095a.83931.83931,0,0,1-.70905-.6416V7.11145A.8976.8976,0,0,1,21.20905,6.41669Z"></path></svg>
                  </div>
                </a>
                <a href="https://leetcode.com/pathakvikas190/" target="_blank" rel="noreferrer">
                  <div className={styles.socialSite}>
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode"><path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path><path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path></svg>
                  </div>
                </a>
              </div>
        </div>
      )
  );
}

export default Homepage;