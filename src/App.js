// import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav/Nav.js'
import Container from './components/Container/Container.js'
import AboutBody from './components/About/About.js'
import Landing from './components/Landingpage/Landing.js';
import Speakers from './components/Speakers/Speakers.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing/>
      <Container>
        <AboutBody/>
        <Speakers />
      </Container>
      
    </div>
  );
}

export default App;
