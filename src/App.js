import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  const [sections] = useState(['About Me', 'Portfolio', 'Contact', 'Resume'])
  const[currentSection, setCurrentSection] = useState(sections[0]);
  return (
    <div>
      <Nav sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <main>
        {(currentSection === 'About Me') ? <About />
        : (currentSection === 'Portfolio') ? <Portfolio />
        : (currentSection === 'Contact') ? <Contact />
        : (currentSection === 'Resume') ? <About />
        : <About />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
