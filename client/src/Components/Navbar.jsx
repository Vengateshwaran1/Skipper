import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import logo from '../assets/Logo/SVG/main-logo-white-transparent.svg'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navigate = useNavigate();


    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 15,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 15,
            damping: 15
            }
        }
    }
    const handleHomeClick = () => {
        navigate('/');
      };

  return (
    <div className='fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50'>
        <div className='max-w-[1300px] mx-auto  flex justify-between text-white
        text-xl items-center px-12 h-20'>

            <img src={logo} alt="" className='w-60 h-42 p-2 cursor-pointer ' onClick={handleHomeClick}/>

            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                <li><Link to="portfolio" smooth={true} offset={50} duration={500} className='hover:text-primary1'>Products</Link></li>
                <li><Link to="contact" smooth={true} offset={50} duration={500} className='hover:text-primary1'>Contact</Link></li>
                <li><Link to="skills" smooth={true} offset={50} duration={500} className='hover:text-primary1'>About</Link></li>
            </ul>

            <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
            className='fixed left-0 top-0 w-[40%] min-h-screen bg-black z-40 backdrop-blur-[3px] opacity-90 '
            >
                <ul className='font-semibold text-4xl space-y-8 mt-24 text-center cursor-pointer'>
                    <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500} className='hover:text-primary1'>Products</Link></li>
                    <li><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500} className='hover:text-primary1'>Contact</Link></li>
                    <li><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500} className='hover:text-primary1'>About</Link></li>
                </ul>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar