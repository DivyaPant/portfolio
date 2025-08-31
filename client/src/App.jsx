import './App.css';
import './theme/themeVariables.css';
import Hero from './components/Hero/Hero';
import ThemeToggle from './components/themeButton/ThemeToggle';
import { ThemeProvider } from './theme/ThemeContext';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Navbar from './components/navbar/Navbar';
import Skills from './components/Skills/Skills';
import Alert from './components/common/alert/Alert';
import {UserContext, AlertContext} from './context/UserContext';
import {alertInitialState} from './constant';
import { useEffect, useState, useRef } from 'react';
import {handleLogin , handleLogout , handleRefreshing} from './firebase/helpers';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [alert, setAlert] = useState(alertInitialState);
const sectionRefs = {
  home: useRef(null),
  about: useRef(null),
  projects: useRef(null),
  contact: useRef(null),
  skills: useRef(null)
};

useEffect(()=>{
  const unsubscribe = handleRefreshing(setIsLoggedIn);
  return () => unsubscribe(); // clean up listener on unmount
}, []);

  return (
    <UserContext.Provider value={isLoggedIn}>
      <AlertContext.Provider value={setAlert}>
    <div className="app-container">
      <Login handleLogout={handleLogout} login={handleLogin}/>
      <Navbar ref={sectionRefs}/>
      <ThemeToggle />
      <Hero ref={sectionRefs}/>
      <About ref={sectionRefs.about}/>
      <Skills ref={sectionRefs.skills}/>
      <Projects ref={sectionRefs.projects}/>
      <Contact ref={sectionRefs.contact}/>
      <Alert alert={alert} setAlert={setAlert}/>
    </div>
    </AlertContext.Provider> 
    </UserContext.Provider>
  );
}

export default function AppWithProvider() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
