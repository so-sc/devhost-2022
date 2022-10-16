import '../../styles/variables.css'
import './Landing.css'
// import Nav from '../Nav/Nav'
// import './Nav.css';
// import navLogo from '../../assets/nav-logo.png';
// import Container from '../Container/Container.js';
import lanlogo from '../../assets/lanlog.png'
import aicteLogo from '../../assets/aicte.png'
import soscLogo from '../../assets/sosc.png'
import sahyadriLogo from '../../assets/sahyadri.png'
// import landingbg from '../../assets/devhost-landing.png'
import Container from '../Container/Container';



function Landingpage() {
  return (
    <section className='landing'>
      <div className='landing-bg-color'>
        {/* <Nav /> */}
        <Container>
          <div className='landing-bg'>
            <div className='landing-transparent-bg'>
              <div className='landing-section'>
                <div className='landing-content'>
                  <div className='presented-by'>
                    <div className='presented-by-imgs'>
                      <img className='presented-by-img' src={sahyadriLogo} alt='sahyadri'/>
                      <img className='presented-by-img' src={soscLogo} alt='sosc'/>
                      <img className='presented-by-img' src={aicteLogo} alt='aicte'/>
                    </div>
                    <p className='presented-by-text'>
                      presents
                    </p>
                  </div>
                  <img className="lan-logo" src={lanlogo} alt="devhost 2022 landing logo" />
                  {/* <p className='tagline'>
                    Student Developers Meet
                  </p> */}
                  <p className='dates'>
                    OCT 28<sup>th</sup>  -  OCT 31<sup>st</sup>
                  </p>
                  <p className='venue'>
                    <a href='https://g.page/Sahyadri-edu?share' class="scem-map">
                    @SCEM
                    </a>
                  </p>
                  <div className='btns'>
                    <a href="https://forms.gle/hiYa4fcRCd85E7bY9" target="_blank" rel="noreferrer"><button className='landing-button-trans'>Register Now</button></a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfT641VZ8RlnPn0s_fm9zLqMLGPKB3io2JjE1DsArb7KMiKMA/viewform" target="_blank" rel="noreferrer"><button className='landing-button'>HackNight</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className='landing-info'>
          <div className='centre-landing-info'>
            <div className='event-info'>
              <h2>Insightful Talks</h2>
              <p>
              Hear what the experts have to share about a wide range of concepts and technologies. Know more about the recent trends, initiatives, innovations and much more. Expand your knowledge and stand a chance to interact with experts from various technical fields.
              </p>
            </div>
            <div className='event-info ew'>
              <h2>Exciting Workshops</h2>
              <p>
              There’s no better way to master a technical skill than to actually get coding. Come join us in a series of talks and workshop exploring various domains. The talks and workshop involve hands-on learning along with discussion and interaction on a given topic.
              </p>
            </div>
            <div className='event-info'>
              <h2>Fun Icebreakers</h2>
              <p>
              A virtual trivia could be just what your social (distancing) life needs. Stand a chance to win exciting prizes by answering questions that test your knowledge on subjects both practical and ridiculously random topics!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}



function Landing() {
  return (
    <Landingpage />
  );
}

export default Landing;
