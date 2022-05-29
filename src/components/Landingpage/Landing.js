import '../../styles/variables.css'
import './Landing.css'
// import './Nav.css';
// import navLogo from '../../assets/nav-logo.png';
// import Container from '../Container/Container.js';
import lanlogo from '../../assets/lanlog.png'
// import landingbg from '../../assets/devhost-landing.png'
import Container from '../Container/Container';



function Landingpage() {
  return (
    <section className='landing'>
      <div className='landing-bg-color'>
        <Container>
          <div className='landing-bg'>
            <div className='landing-transparent-bg'>
              <div className='landing-section'>
                <div className='landing-content'>
                  <img className="lan-logo" src={lanlogo} alt="devhost 2022 landing logo" />
                  <p className='tagline'>
                    Student Developers Meet
                  </p>
                  <p className='dates'>
                    June 23'rd - June 25'th
                  </p>
                  <div className='btns'>
                    <button className='landing-button'>Register Now</button>
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
                lorem ipsum lesgo bro fake lorem ipsum lmao kknow
                will get to know about this lol, hi dhanush
              </p>
            </div>
            <div className='event-info ew'>
              <h2>Exciting Workshops</h2>
              <p>
                lorem ipsum lesgo bro fake lorem ipsum lmao kknow
                will get to know about this lol, hi dhanush
              </p>
            </div>
            <div className='event-info'>
              <h2>Fun Icebreakers</h2>
              <p>
                lorem ipsum lesgo bro fake lorem ipsum lmao kknow
                will get to know about this lol, hi dhanush
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
