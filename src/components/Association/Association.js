// import '../../styles/variables.css'
import "./Association.css";
import { associationLists } from "./Associationlist";
// import './Landing.css'
// import './Nav.css';
// import navLogo from '../../assets/nav-logo.png';
// import Container from '../Container/Container.js';
// import lanlogo from '../../assets/lanlog.png'
// import Container from '../Container/Container';

function Associationcard({ item, index }) {
  return (
    <a className="association-card" href="/">
      <img className="association-img" src={item.img} alt={`${item.name} `} />
    </a>
  );
}

function Association() {
  return (
    <div className="association">
      <h1>In Association</h1>
      <div className="association-box">
        <ul className="asso-img">
          {associationLists.map((item, index) => {
            return <Associationcard item={item} index={index} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Association;
