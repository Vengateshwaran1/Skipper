import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import logo from '../assets/Logo/PNG/main-logo-trans.png'
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
    <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-30'>
        <div className='max-w-[1300px] mx-auto flex justify-between text-primary text-xl items-center px-8 h-20 font-semibold'>
            <div className=''>
                <img src={logo} alt="" className='w-60 h-42 p-3 cursor-pointer mt-5' onClick={handleHomeClick}/>
            </div>

            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                <li><Link to="products" smooth={true} offset={50} duration={500} className='hover:font-bold'>Products</Link></li>
                <li><Link to="contact" smooth={true} offset={50} duration={500} className='hover:font-bold'>Contact</Link></li>
                <li><Link to="about" smooth={true} offset={50} duration={500} className='hover:font-bold'>About</Link></li>
                <li><Link to="login" smooth={true} offset={50} duration={500} className='hover:font-bold'>Login/Signup</Link></li>
            </ul>

            <hr className="h-px my-8  border-0 bg-gray-700"/>

            <div onClick={toggleNav} className='md:hidden z-50 text-primary'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
            className='fixed left-0 top-0 w-[50%] min-h-screen bg-primary1 backdrop-blur-[5px] z-30 p-2 border-r border-r-primary bg-opacity-25'
            >
                <ul className='font-semibold text-2xl space-y-8 mt-24 text-center cursor-pointer'>
                    <li><Link to="products" onClick={closeNav} smooth={true} offset={50} duration={500} className='hover:font-bold'>Products</Link></li>
                    <li><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500} className='hover:font-bold'>Contact</Link></li>
                    <li><Link to="about" onClick={closeNav} smooth={true} offset={50} duration={500} className='hover:font-bold'>About</Link></li>
                    <li><Link to="login" onClick={closeNav} smooth={true} offset={50} duration={500} className='hover:font-bold'>Login</Link></li>
                </ul>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar