import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './Components/Homepage/homepage.jsx';
import About from './Components/About/about.jsx';
import styles from "./App.module.css"
import Projects from './Components/Projects/projects.jsx';

function App() {

  const [showNavbar, setNavbar] = useState(false);
  return (
    <>
      <div className={styles.App}>
        <div className={styles.Container}>
          <Routes>
            <Route path ="/" element={<Homepage setNavbar={setNavbar} showNavbar={showNavbar} />} />
            <Route path ="/about" element={<About setNavbar={setNavbar} showNavbar={showNavbar} />} />
            <Route path ="/project" element={<Projects setNavbar={setNavbar} showNavbar={showNavbar} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
