import React from 'react'
import DestinationCard from '../layouts/DestinationCard'
import img1 from '../assets/img/dest1.png'
import img2 from '../assets/img/dest2.png'
import img3 from '../assets/img/dest3.png'


const Destinations = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center md:mx-32 mx-5'>
            <h1 className='font-medium text-center text-4xl lg:mt-0  mt-16'>Most Popular Destinations</h1>
            <div className='flex flex-col 
            
            lg:flex-row gap-5 mt-14'>
                <DestinationCard img={img1} title="Paris, France" para="Paris offers iconic landmarks like the Eiffel Tower and world-class
                art at the Louvre Museum."/>

                <DestinationCard img={img2} title="Dubai, UAE, France" para="A city of superlatives, Dubai boasts towering skyscrapers, luxury shopping, and desert adventures"/>

                <DestinationCard img={img3} title="Venice, Italy" para="Explore the romantic canals and historic architecture of Venice, a city built on water."/>
            </div>
        </div>
    )
}

export default Destinations