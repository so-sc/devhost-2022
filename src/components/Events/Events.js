import React from 'react'
import './Events.css'
import {EventList} from './EventsList'

function EventCard ({item,index})  {
  
  // let pos = index%2?'row':'row-reverse';
  
  return (
    // <div className='EventCard' style={{flexDirection: pos}}>
    <div className='EventCard'>
        <div className='Event-body'>
          <div className='Event-body-top'>
            <h3 className='Event-role'>[ {item.role} ]</h3>
            <h1 className='Event-heading'> {item.title} </h1>
            <h3 className='Event-time'> {item.time} </h3>
            <p className='Event-desc'> {item.desc} </p>
          </div>
          <a className='Event-speaker-linkdln' href={item.link}> linkedin </a>
        </div>
        <figure className='Event-speaker'>
            <img className='Event-img' src={item.img} alt={`${item.name} speaker`}/>
            {/* <div className='name-tag'> */}
              {/* <span className='tag'></span> */}
              <figcaption className='Event-speaker-name'>{item.name}</figcaption>
            {/* </div> */}
        </figure>
    </div>
  );
}
function Events() {
	return (
		<div className='events'>
      <div className='main-head'>
        <h1>Events</h1>
      </div>
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