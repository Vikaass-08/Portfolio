import styles from "./timeline.module.css"

const Timeline = (props) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineItem}>
        <p className={styles.date}>{props.data[0]}</p>
        <h4>{props.data[1]} - &nbsp;
          <span>{props.data[2]}</span>
        </h4>
          <ul>
            { props.data[3].map ((item, idx) => 
              <>
                <li key={idx}>{item}</li> 
              </>
            )}
          </ul>
      </div>
    </div>
  )
}

export default Timeline;