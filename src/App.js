// import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav/Nav.js'
import Container from './components/Container/Container.js'
import AboutBody from './components/About/About.js'
import Landing from './components/Landingpage/Landing.js';
// import Speakers from './components/Speakers/Speakers.js'
import Events from './components/Events/Events'
import Association from './components/Association/Association.js';
import Sponsors from './components/Sponsors/Sponsors.js';
import Footer from './components/Footer/Footer.js';
import OtherEvents from './components/Other-Events/other';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing/>
      <Container>
        <AboutBody/>
        {/* <Speakers /> */}
        <Events/>
        <OtherEvents/>
        <Association/>
        <Sponsors/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
