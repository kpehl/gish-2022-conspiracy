import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  const [sections] = useState(['About Me', 'Portfolio', 'Contact', 'Resume'])
  const[currentSection, setCurrentSection] = useState(sections[0]);
  return (
    <div>
      <Nav sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <main>
        {(currentSection === 'About Me') ? <About />
        : (currentSection === 'Portfolio') ? <Portfolio />
        : (currentSection === 'Contact') ? <About />
        : (currentSection === 'Resume') ? <About />
        : <About />}
      </main>
    </div>
  );
}

export default App;
