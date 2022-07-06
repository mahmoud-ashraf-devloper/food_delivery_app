import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../public/assets/images/res-logo.png'
import { useRouter } from 'next/router'

import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosCloseCircle } from 'react-icons/io'

const navLinks = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'About',
        path: '/about',
    },
    {
        display: 'Contact',
        path: '/contact',
    },
    {
        display: 'Checkout',
        path: '/checkout',
    },
    {
        display: 'Login',
        path: '/login',
    },
    {
        display: 'Register',
        path: '/register',
    },
    {
        display: 'Cart',
        path: '/cart',
    },
]



const Header = () => {
    const router = useRouter()
    const [nav, setNav] = useState(false);

    const toggleNav = ()=>{
        setNav(!nav)
    }

    return (
        <div className='relative'>
            <div className='flex md:justify-evenly justify-between mx-6 h-20 items-center'>
                <div className='flex flex-col items-center  mt-1'>
                    <Image width={70} height={70} src={logo} alt='/' />
                    <p className='font-bold text-sm hidden md:flex'>Testy Treat</p>
                </div>
                <ul className='md:flex hidden space-x-6 font-bold'>

                    {
                        navLinks.map((link, index) => <li className={router.pathname == link.path ? 'text-red-600' : ''} key={index} ><Link href={link.path} alt='/'>{link.display}</Link></li>)
                    }
                </ul>
                <div className='flex space-x-4'>
                    <div className='relative'>
                        <AiOutlineHome className='w-6 h-6 cursor-pointer ' />
                        <p className='absolute -top-2 -right-2 text-white bg-red-600 w-4 h-6 flex items-center p-1 rounded-full'>6</p>
                    </div>
                    <BsFillPersonFill className='w-6 h-6 cursor-pointer ' />
                    <GiHamburgerMenu onClick={toggleNav} className='w-6 h-6 cursor-pointer md:hidden ' />
                </div>
            </div>
            <div className={nav ? 'block transition-opacity ease-in duration-500' : 'hidden transition-opacity ease-in duration-300'}>
                <div className='bg-gray-600 opacity-40 z-10 h-screen absolute inset-0'></div>
                <div className='absolute right-20S inset-0 w-1/2 z-20 bg-red-100 text-slate-600 h-screen'>
                    <div className='flex justify-between my-6 mx-4 '>
                        <Image width={70} height={70} src={logo} alt='/' />
                        <span onClick={toggleNav} className='flex justify-center items-center cursor-pointer hover:brightness-125'><IoIosCloseCircle className='w-8 h-8 text-red-600' /></span>
                    </div>
                    <ul className='flex flex-col font-bold'>
                        {
                            navLinks.map((link, index) => <li onClick={toggleNav} className={router.pathname == link.path ? 'text-red-600 hover:bg-red-200 py-6 px-6' : 'hover:bg-red-200 py-6 px-6'} key={index} ><Link href={link.path} alt='/'>{link.display}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
