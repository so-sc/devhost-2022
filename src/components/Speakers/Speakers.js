import './speaker.css';
import { speakersList } from './SpeakersList';
// import Jehad from '../../assets/speakers/jehad.png';
// import Github from '../../assets/GitHub-Mark-64px.png';

function SpeakerCard( { item, index } ) {
	return (
		<div className="speaker-card">
			<img className='speaker-img' src={item.img} alt={`${item.name} speaker`} />
			<div className='speaker-body'>
				<h2 className='speaker-heading'>{index + 1}. {item.name}</h2>
				<p className='speaker-role'>{item.role}</p>
				<div className='speaker-desc'>{item.desc}</div>
			</div>
		</div>
	); 
}


function Speakers() {
	return (
		<div className='speakers'>
			<h1> <span className='headnum'>02.  </span>Previous Speakers</h1>
			{/* <ul> */}
					{speakersList.map((item, index) => {
						return (
							<SpeakerCard item={item} index={index} key={index}/>
						);
					})}
				{/* </ul> */}
		</div>
	);
}

export default Speakers;
