import React from 'react'
import Button from '../layouts/Button'
import img from '../assets/img/contact.jpg'

const Contact = () => {
    const backgroundColor = 'bg-primaryCl'
    return (
        <div className='min-h-screen flex flex-col itmes-center justify-center md:mx-32  mx-5 mt-10'>
            <div className='flex flex-col lg:flex-row justify-between w-full '>
                <form  className='w-full lg:w-2/5 space-y-5 bg-[#f2f2f2] p-5 rounded-xl'>
                    <h1 className='text-4xl font-semibold text-center'>Contact</h1>
                    <div className='flex flex-col'>
                        <label htmlFor="userName">Full Name</label>
                        <input
                            className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                            type="text"
                            name='userName'
                            id='userName'
                            placeholder='Enter your full name' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="userEmail">Email</label>
                        <input
className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                            type="text"
                            name='userEmail'
                            id='userEmail'
                            placeholder='Enter your Email' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="userEmail">Message</label>
                        <textarea
                        className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                        name="userMsg" id="userMsg" cols="30" rows="3"></textarea>
                    </div>

                    <div className='flex flex-row justify-center'>
                        <Button title='Submit' backgroundColor={backgroundColor} />
                    </div>

                </form>
                <div className='flex flex-col items-center w-full lg:w-1/2 my-5'>
                    <img
                    className='rounded-lg'
                    src={img} alt="img" />
                    <p className='text-center text-sm pt-4 text-[#898888]'>
                        We'd love to hear from you! Whether you have questions, feedback, or
                    need assistance with your travel plans, please don't hesitate to
                    reach out. Our team is here to assist you every step of the way.
                    Simply fill out the form below, and we'll be in touch shortly.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact