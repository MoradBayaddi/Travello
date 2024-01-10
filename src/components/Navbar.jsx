import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Button from '../layouts/Button'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

  const backgroundColor = 'bg-primaryCl';

  const [menu,setMuenu] = useState(false);
  const handleChange = () => {
    setMuenu(!menu);
  }
  return (
    <div>
      <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-lightColor'>
        <div className='flex items-center'>
          <Link to="/"
            spy={true}
            smooth={true}
            duration={500}
            className='font-semibold text-xl cursor-pointer duration-300  hover:text-primaryCl'><h1>Travello</h1>
          </Link>
        </div>

        <nav className=' hidden lg:flex flex-row items-center gap-6'>
          <Link to="hero" spy={true} smooth={true} duration={500} className='cursor-pointer duration-300  hover:text-primaryCl'>Home</Link>
          <Link to="features" spy={true} smooth={true} duration={500} className='cursor-pointer duration-300  hover:text-primaryCl'>Features</Link>
          <Link to="destinations" spy={true} smooth={true} duration={500} className='cursor-pointer duration-300  hover:text-primaryCl'>Destinations</Link>
          <Link to="about" spy={true} smooth={true} duration={500} className='cursor-pointer duration-300  hover:text-primaryCl'>About</Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className='cursor-pointer duration-300  hover:text-primaryCl'>Contact</Link>

        </nav>

        <div className='hidden lg:flex flex-row items-center gap-4'>
          <h1 className='cursor-pointer hover:text-primaryCl'>register</h1>
          <Button title='login' backgroundColor={backgroundColor} />
        </div>

        {/* respenmsive *** */}
        <div className='lg:hidden flex items-center cursor-pointer py-2' onClick={handleChange}>
          <AiOutlineMenu size={25} on />
        </div>

        {/* respensive nav for small devices :  */}
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg-hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full transition-transorm duration-300`}>
          <Link to="hero" spy={true} smooth={true} duration={500} className='cursor-pointer duration-300  hover:text-primaryCl'>Home</Link>
          <Link to="features" spy={true} smooth={true} duration={500} className='cursor-pointer duration-300  hover:text-primaryCl'>Features</Link>
          <Link to="destinations" spy={true} smooth={true} duration={500} className='cursor-pointer duration-300  hover:text-primaryCl'>Destinations</Link>
          <Link to="about" spy={true} smooth={true} duration={500} className='cursor-pointer duration-300  hover:text-primaryCl'>About</Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className='cursor-pointer duration-300  hover:text-primaryCl'>Contact</Link>
          
          
          <div className='flex lg:hidden flex-col items-center gap-4'>
          <h1 className='cursor-pointer hover:text-primaryCl'>register</h1>
          <Button title='login' backgroundColor={backgroundColor} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar