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
        <div className="sponsors-card">
            <img className='sponsors-img' src={item.img} alt={`${item.name} `} />
        </div>
    );
}


function Sponsors() {
    return (
        <div className='sponsors'>
            <h1>Sponsors</h1>
            <div className='sponsors-box'>
                <ul className='sponsor-img'>
                    {sponsorsList.map((item, index) => {
                        return (
                            <Sponsorscard item={item} index={index} key={index} />
                        );
                    })}
                </ul>
            </div>
        </div>

    );
}

export default Sponsors;
