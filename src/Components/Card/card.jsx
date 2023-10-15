import styles from "./card.module.css"
import Button from "../Button/button";


const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgView}>
        <img src={props.data.imgUrl} alt={props.data.imgAlt} />
      </div>
      <div className={styles.cardTitleView}>
        <h3>{props.data.title}</h3>
      </div>
      <div className={styles.cardButtonView}>
        <Button onClickAction={props.action} buttonText="View Project" />
      </div>
    </div>
  )
};

export default Card;