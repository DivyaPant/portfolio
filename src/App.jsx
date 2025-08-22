import './App.css';
// import './theme/theme.css';
import Hero from './components/Hero/Hero';
import ThemeToggle from './components/toggle/ThemeToggle';
import { ThemeProvider } from './theme/ThemeContext';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="app-container">
      {/* <ThemeToggle /> */}
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
