import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/homepage.jsx';
import About from './Components/About/about.jsx';
import styles from "./App.module.css"
import Projects from './Components/Projects/projects.jsx';
import { Animation } from './Handlers/context.jsx';
import ContactUs from './Components/ContactUs/contactUs.jsx';

function App() {

  const [showNavbar, setNavbar] = useState(false);
  const [animationType, setAnimationType] = useState("");

  return (
    <>
      <div className={styles.App}>
        <div className={styles.Container}>
          <Animation.Provider value={{animationType, setAnimationType, showNavbar, setNavbar}}>
            <Routes>
              <Route path ="/" element={<Homepage />} />
              <Route path ="/about" element={<About />} />
              <Route path ="/project" element={<Projects />} />
              <Route path ="/contact" element={<ContactUs />} />
            </Routes>
          </Animation.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
