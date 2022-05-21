import '../../styles/variables.css'
import './Nav.css';
import navLogo from '../../assets/nav-logo.png';
import Container from '../Container/Container.js';

function Nav() {
  return (
    <div className="nav">
      <Container>
        <div className='nav-content'>
          <img className="nav-logo" src={navLogo} alt="devhost 2022 navbar logo" />
          <ul className='nav-items'>
            <li><a href='https://github.com/so-sc/code-of-conduct'>Community Guidlines</a></li>
            <li><a href='https://github.com/so-sc/code-of-conduct'>Code of Conduct</a></li>
            <li><a href='https://github.com/so-sc/code-of-conduct'>Contact</a></li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Nav;
