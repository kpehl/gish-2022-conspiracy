import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [sections] = useState(['About Me', 'Portfolio', 'Contact', 'Resume'])
  const[currentSection, setCurrentSection] = useState(sections[0]);
  return (
    <div>
      <Header>
        <Nav sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
      </Header>
      <main>
        {(currentSection === 'About Me') ? <About />
        : (currentSection === 'Portfolio') ? <Portfolio />
        : (currentSection === 'Contact') ? <Contact />
        : (currentSection === 'Resume') ? <Resume />
        : <About />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
