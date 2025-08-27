import './App.css';
import './theme/themeVariables.css';
import Hero from './components/Hero/Hero';
import ThemeToggle from './components/themeButton/ThemeToggle';
import { ThemeProvider } from './theme/ThemeContext';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Admin from './components/Admin';
import {UserContext} from './context/UserContext';
import {signOut, onAuthStateChanged} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/config";
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogout = () => {
      // const auth = getAuth();
      signOut(auth).then(() => {
      localStorage.removeItem('token');
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
    };

    async function login(email, password) {
        try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken(); // JWT from Firebase
    setIsLoggedIn(true)
    localStorage.setItem("token", token);
  } catch (error) {
    console.error("Login failed:", error.message);
  }
}

useEffect(()=>{
  // Refresh cases
onAuthStateChanged(auth, (user) => {
  if (user) {
    setIsLoggedIn(true);
    console.log("User is logged in:", user);
  } else {
    setIsLoggedIn(false);
    console.log("No user is logged in");
  }
});
}, [])
  return (
    <div className="app-container">
      <UserContext.Provider value={isLoggedIn}>
      <Admin handleLogout={handleLogout} login={login}/>
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
      </UserContext.Provider>
    </div>
  );
}




export default function AppWithProvider() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
