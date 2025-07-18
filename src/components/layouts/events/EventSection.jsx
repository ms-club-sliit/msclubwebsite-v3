import React from 'react'
import {workshopData} from '@/data/eventData'
import EevntCard from './EventCard'

const EventSection = () => {
  return (
    <div className='event-showcase py-[40px] md:py-[80px] lg:py-[100px] md:mx-[80px]'>
        <div className='w-4/5 mx-auto grid grid-rows-3  gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                workshopData.map(event => (
                    <EevntCard 
                        key={event.id}
                        imageSrc={event.imageSrc}
                        altText= {event.title}
                        title={event.title}
                        description={event.description}
                        date={event.date}
                        time={event.time}
                        location={event.location}
                        buttonText= {event.buttonText}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default EventSection