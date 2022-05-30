import './Nav.css';
import navLogo from '../../assets/nav-logo.png';
import Container from '../Container/Container.js';

function Nav() {
  return (
    <div className="nav">
      <Container>
        <div className='nav-content'>
          <img className="nav-logo" src={navLogo} alt="devhost 2022 navbar logo" />
          <div className='nav-items'>
            <a className="nav-item" href='https://github.com/so-sc/code-of-conduct'>Community Guidlines</a>
            ・
            <a className="nav-item" href='https://github.com/so-sc/code-of-conduct'>Code of Conduct</a>
            ・
            <a className="nav-item" href='https://github.com/so-sc/code-of-conduct'>Contact</a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Nav;
