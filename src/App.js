import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import GISH from './components/GISH';
import Footer from './components/Footer';

function App() {
  const [sections] = useState(['About Cats', 'The Evidence', 'Contact', 'GISH'])
  const[currentSection, setCurrentSection] = useState(sections[0]);
  return (
    <div>
      <Header>
        <Nav sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
      </Header>
      <main>
        {(currentSection === 'About Cats') ? <About />
        : (currentSection === 'The Evidence') ? <Portfolio />
        : (currentSection === 'Contact') ? <Contact />
        : (currentSection === 'GISH') ? <GISH />
        : <About />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
