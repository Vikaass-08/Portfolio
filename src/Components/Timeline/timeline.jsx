import styles from "./timeline.module.css"

const Timeline = (props) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineItem}>
        <p className={styles.date}>{props.data.date}</p>
        <h4>{props.data.heading} - {props.data.subHeading}
        </h4>
          {props.data.extra.map((extraData) => 
            <dd className={styles.extraList} key={extraData}>{extraData}</dd>
          )}
      </div>
    </div>
  )
}

export default Timeline;