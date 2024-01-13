import {useContext, React} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../Button/button';
import styles from "./contactus.module.css"
import Heading from '../Heading/Heading';
import { Animation } from "../../Handlers/context";
import Paths from '../Paths/paths';

const ContactUs = (props) => {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_SPREE_CODE);
  const {animationType, showNavbar, setNavbar} = useContext(Animation);

  const fadeInAnim = `${styles.form} ${styles.zoomIn}`;
  const normalClass = `${styles.form}`;

  return (
    showNavbar ? 
      <Paths/> :
      (
        <form onSubmit={handleSubmit} className={animationType === "contatMeAnim" ? fadeInAnim : normalClass }>
          <Heading setNavbar={setNavbar}/>
          <div className={styles.row}>
            <div className={styles.connect_text}>
              <p>Reach Out</p>
            </div>
            <div className={styles.input_group}>
              <input 
                id={styles.email} 
                type="email" 
                name='email' 
                placeholder="Email" 
                className={styles.input_control}
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            <div className={styles.input_group}>
              <input 
                type="text" 
                name='subject'
                placeholder="Subject" 
                className={styles.input_control}
                required
              />
              <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className={styles.input_group}>
              <textarea
                id="message"
                name="message"
                className={styles.input_control}
                placeholder='Message'
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            {state.succeeded ? 
              <p className={styles.thanks_msg}>Thank you for reaching out!!</p> : 
              <div className={styles.submit_btn}>
                <Button buttonText="Submit" /> 
              </div>
            }
          </div> 
        </form>
      )
  );
};

export default ContactUs;