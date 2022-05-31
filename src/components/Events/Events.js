import React from 'react'
import './Events.css'
import {EventList} from './EventsList'

function EventCard ({item,index})  {
  return (
    <div className='EventCard'>
        <div className='Event-body'>
            <h3 className='Event-role'>{item.role}</h3>
            <span className='Event-heading'> {item.title} </span>
            <h4 className='Event-time'> {item.time} </h4>
            <p className='Event-desc'> {item.desc} </p>
        </div>
        <div className='Event-speaker'>
            <img className='Event-img' src={item.img} alt={`${item.name} speaker`}/>
            <div className='name-tag'>
              <span className='tag'></span>
              <h2 className='Event-speaker-name'>{item.name}</h2>
            </div>
        </div>
    </div>
  );
}
function Events() {
	return (
		<div className='events'>
			<h1>Events</h1>
			{/* <ul> */}
					{EventList.map((item, index) => {
						return (
							<EventCard item={item} index={index} key={index}/>
						);
					})}
				{/* </ul> */}
		</div>
	);
}

export default Events