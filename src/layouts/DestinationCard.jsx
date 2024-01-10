import React from 'react'
import Button from './Button'

const DestinationCard = (props) => {
    const backgroundColor = 'bg-primaryCl'
    return (
        <div className=' w-full lg:w-2/6 cursor-pointer hover:shadow-[0_10px_25px_rgb(0,0,0,0.2)] 
        hover:translate-y-[-0.5rem] transition-[300]'>
            <img className='rounded-t-lg ' src={props.img} alt="img" />
            <div className='bg-[#f2f2f2] p-5 space-y-3 rounded-b-lg'>
                <h2 className='text-xl font-medium text-center'>{props.title}</h2>
                <p className='text-sm'>{props.para}</p>
                <div className='flex flex-grow justify-center'>
                    <Button title="Book tickets" backgroundColor={backgroundColor} />
                </div>
            </div>
        </div>
    )
}

export default DestinationCard