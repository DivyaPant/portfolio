import './App.css';
import './theme/themeVariables.css';
import Hero from './components/Hero/Hero';
import ThemeToggle from './components/themeButton/ThemeToggle';
import { ThemeProvider } from './theme/ThemeContext';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Admin from './components/Admin';

function App() {
  return (
    <div className="app-container">
      <Admin />
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
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
