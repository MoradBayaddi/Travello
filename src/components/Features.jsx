import React from 'react'
import img from '../assets/img/feature.jpg'
import img1 from '../assets/img/service.png'
import img2 from '../assets/img/user.png'
import img3 from '../assets/img/wallet.png'



const Features = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row items-center md-mx-32 mx-5 gap-14'>
            <div className='w-full lg:w-2/4'>

                <div className='space-y-4'>
                    <h1 className='text-4xl font-medium text-center md:text-start leading-tight'>Get Ready to Explore, Get Ready to Experience!
                    </h1>

                    <p>
                        Discover the Best Holiday Experiences with Travello! We're
                        dedicated to curating the latest and greatest destinations from
                        around the world, ensuring you always get the ultimate travel
                        experience.
                    </p>
                </div>

                <div className='w-full lg:w-3/5 mt-10 lg:ml-14'>
                    <img className='rounded-xl shadow-[0_20px_50px_rgba(8,-112,-184,0.7)]' src={img} alt="features img" />
                </div>

            </div>

            <div className='w-full lg:w-1/2 space-y-10'>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row items-center w-28'>
                        <img src={img1} alt="img" />
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>Friendly Service</h1>
                        <p className='text-[#898888]'>We will provide excellent and friendly service for the sake of our
                            customers.</p>
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row items-center w-28'>
                        <img src={img2} alt="img" />
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>Unforgettable experience</h1>
                        <p className='text-[#898888]'>We will provide excellent and Unforgettable experience for the
                            sake of our customers.</p>
                    </div>
                </div>

                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row items-center w-28'>
                        <img src={img3} alt="img" />
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>Affordable prices</h1>
                        <p className='text-[#898888]'>We will provide excellent and Affordable prices for the sake of
                            our customers.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Features