import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
