import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/homepage.jsx';
import About from './Components/About/about.jsx';
import styles from "./App.module.css"
import Projects from './Components/Projects/projects.jsx';
import { Animation } from './Handlers/context.jsx';

function App() {

  const [showNavbar, setNavbar] = useState(false);
  const [animationType, setAnimationType] = useState("");

  return (
    <>
      <div className={styles.App}>
        <div className={styles.Container}>
          <Animation.Provider value={{animationType, setAnimationType}}>
            <Routes>
              <Route path ="/" element={<Homepage setNavbar={setNavbar} showNavbar={showNavbar} />} />
              <Route path ="/about" element={<About setNavbar={setNavbar} showNavbar={showNavbar} />} />
              <Route path ="/project" element={<Projects setNavbar={setNavbar} showNavbar={showNavbar} />} />
            </Routes>
          </Animation.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
