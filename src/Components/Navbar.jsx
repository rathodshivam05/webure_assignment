import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between w-[80%] m-auto mt-[49px]'>
            <Link to="/"><h3 className='text-[#FB3F6C] font-[700px] italic text-[26px]'>Webure Technologies</h3></Link>
            <Link to="/about"><h3 className='pt-2'>About Us</h3></Link>
            <Link to="/services"><h3 className='pt-2'>Services</h3></Link>
            <Link to="/careers"><h3 className='pt-2'>Careers</h3></Link>
            <Link to="/stories"><h3 className='pt-2'>ROI Stories</h3></Link>
            <Link to="/blog"><h3 className='pt-2'>Blog</h3></Link>
            <Link to="/contact"><h3 className='pt-2'>Contact Us</h3></Link>
            <Link to="/talk"><button className='pt-2'>Let's talk </button></Link>
        </div>

    )
}

export default Navbar
