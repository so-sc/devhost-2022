// import '../../styles/variables.css'
// import './Association.css';
// import { associationLists } from './Associationlist';
import {sponsorsList} from './SponsorsList';
import './Sponsors.css';
// import './Landing.css'
// import './Nav.css';
// import navLogo from '../../assets/nav-logo.png';
// import Container from '../Container/Container.js';
// import lanlogo from '../../assets/lanlog.png'
// import Container from '../Container/Container';


function Sponsorscard({ item, index }) {
    return (
      <a className="association-card" href="/">
        <img className="association-img" src={item.img} alt={`${item.name} `} />
      </a>
    );
  }
  
  function Sponsors() {
    return (
      <div className="association">
        <h1>Sponsors</h1>
        <div className="association-box">
          <ul className="asso-img">
            {sponsorsList.map((item, index) => {
              return <Sponsorscard item={item} index={index} key={index} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Sponsors;
  