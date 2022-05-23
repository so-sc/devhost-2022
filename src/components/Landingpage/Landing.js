import '../../styles/variables.css'
import './Landing.css'
// import './Nav.css';
// import navLogo from '../../assets/nav-logo.png';
// import Container from '../Container/Container.js';
import lanlogo from '../../assets/lanlog.png'


function Landingpage() {
  return (
    <section className='landing'>
      <div className='landing-section'>
        <div className='landing-content'>
          <div className="lan-logo">
            <img src={lanlogo} alt="devhost 2022 landing logo" />
          </div>
          <div className='tagline'>
            <p>
              Student Developers Meet
            </p>
          </div>
          <div className='dates'>
            <p>
              June 01 - June 02
            </p>
          </div>
          <div className='btns'>
            <button>Register now</button>
            <button>Nope</button>
          </div>
        </div>
      </div>
      <div className='landing-info'>
        <div className='event-info'>
          <h2>Insightful Talks</h2>
          <p>
            lorem ipsum lesgo bro fake lorem ipsum lmao kknow
            will get to know about this lol, hi dhanush
          </p>
        </div>
        <div className='event-info'>
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
    </section>

  );
}



function Landing() {
  return (
    <Landingpage />
  );
}

export default Landing;
