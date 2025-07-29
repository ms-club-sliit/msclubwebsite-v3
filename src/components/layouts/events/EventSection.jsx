import React from 'react'
import {workshopData} from '@/data/eventData'
import EevntCard from './EventCard'
import BackgroundContainer from "@/components/BackgroundContainer";

const EventSection = () => {
  return (
    <BackgroundContainer>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-14'>
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
    </BackgroundContainer>
  )
}

export default EventSection