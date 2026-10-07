// import logo from './logo.svg';
import { LanguageProvider } from './components/LanguageContext';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Process from './components/Process/Process.js';
import Resume from './components/Resume/Resume.js';
import Contacto from './components/Contact/Contact.js';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Home />
        <Navbar />
        <About />
        <Projects />
        <Process />
        <Resume />
        <Contacto />
      </div>
    </LanguageProvider>
  );
}

export default App;