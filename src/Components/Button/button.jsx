import styles from "./button.module.css"
const Button = (props) => {
  return (
    <div className={styles.button}>
      <button onClick={props.onClickAction}>{props.buttonText}</button>
    </div>
  )
};

export default Button