import './App.css';
import './theme/themeVariables.css';
import Hero from './components/Hero/Hero';
import ThemeToggle from './components/themeButton/ThemeToggle';
import { ThemeProvider } from './theme/ThemeContext';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import {UserContext} from './context/UserContext';
import { useEffect, useState } from 'react';
import {handleLogin , handleLogout , handleRefreshing} from './firebase/helpers';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(()=>{
  const unsubscribe = handleRefreshing(setIsLoggedIn);
  return () => unsubscribe(); // clean up listener on unmount
}, []);

  return (
    <UserContext.Provider value={isLoggedIn}>
    <div className="app-container">
      <Login handleLogout={handleLogout} login={handleLogin}/>
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
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
