// import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav/Nav.js'
import Container from './components/Container/Container.js'
import AboutBody from './components/About/About.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Container>
        <AboutBody/>
      </Container>
    </div>
  );
}

export default App;
