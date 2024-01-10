import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='bg-darkBackground text-white'>
            <div className='flex flex-col  md:flex-row justify-between  p-8 md:mx-10 xl:mx-32 px-5'>
                <div className='w-full md:w-1/4 pt-8'>
                    <h1 className='font-semibold text-xl pb-4'>Travello</h1>
                    <p className='text-sm'> With Travello you can experience new travel and the best tourist
                        destinations that we have to offer</p>
                </div>
                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-8'>Destinations</h1>
                    <nav className='flex flex-col gap-2'>
                        <a className='hover:text-primaryCl transition-all cursor-pointer' href="/">Paris, France</a>
                        <a className='hover:text-primaryCl transition-all cursor-pointer' href="/">Csablanca , Morocco</a>
                        <a className='hover:text-primaryCl transition-all cursor-pointer' href="/">Dowar Grawa, Morocco</a>
                    </nav>
                </div>

                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-8'>About</h1>
                    <nav className='flex flex-col gap-2' >
                        <a className='hover:text-primaryCl transition-all cursor-pointer' href="/">Contact</a>
                        <a className='hover:text-primaryCl transition-all cursor-pointer' href="/">Testimenial</a>
                        <a className='hover:text-primaryCl transition-all cursor-pointer' href="/">Rating</a>
                    </nav>
                </div>

                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-8'>Follow us</h1>
                    <nav className='flex flex-col md:items-center gap-2' >
                        <BsFacebook size={25} className='hover:text-primaryCl transition-all cursor-pointer'/>
                        <RiTwitterXFill size={25} className='hover:text-primaryCl transition-all cursor-pointer'/>
                        <a href="https://www.instagram.com/mouradbayadi/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram size={25} className='hover:text-primaryCl transition-all cursor-pointer'/>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer