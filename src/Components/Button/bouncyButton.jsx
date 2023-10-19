import styles from "./bouncyButton.module.css"
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const BouncyButton = (props) => {
  const colorLink = useRef();
  const tl = useRef();
  
  useEffect(() => {
    tl.current = gsap.timeline({paused: true})
    tl.current.to(colorLink.current, {
      width: "calc(100% + 1.3em)",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.4
    });
    tl.current.to(colorLink.current, {
      width: "2em",
      left: "calc(100% - 1.8em)",
      ease: "Elastic.easeOut(0.4)",
      duration: 0.6
    });
  }, []);

  const mouseEnter = () => {
    tl.current.play();

  };

  const mouseLeave = () => {
    tl.current.reverse();
  };


  return (
    <div className={styles.wrapper}>
      <div onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} className={styles.link} onClick={props.onClickAction}>
        <div className={styles.color} ref={colorLink}></div>
        <span className={styles.buttonText}>{props.buttonText}</span>
        <span className={styles.svgContainer}>
          <svg className={styles.svgContainer} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="next-arrow"><path d="M22.707,12.707a1,1,0,0,0,0-1.414l-5-5a1,1,0,0,0-1.414,1.414L19.586,11H2a1,1,0,0,0,0,2H19.586l-3.293,3.293a1,1,0,0,0,1.414,1.414Z"></path></svg>
        </span>
      </div>
    </div>
  )
}

export default BouncyButton