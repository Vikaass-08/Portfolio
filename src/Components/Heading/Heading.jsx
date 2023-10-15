import styles from "./Heading.module.css"
import Logo from "../Logo/logo.jsx";
import Navbar from "../Navbar/navbar.jsx";

const Heading = (props) => {
  return (
    <div className={styles.header}>
      <Logo/>
      <Navbar showNavbar={props.showNavbar} setNavbar={props.setNavbar}  />
    </div>
  )
};

export default Heading;