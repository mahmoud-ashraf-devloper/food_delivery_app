import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../public/assets/images/res-logo.png'
import { useRouter } from 'next/router'

import { useSelector } from 'react-redux';

import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
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
    const [shrinkAndShadow, setShrinkAndShadow] = useState(false);

    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    console.log("total:",totalQuantity);

    const toggleNav = ()=>{
        setNav(!nav)
    }

    useEffect(()=>{

        const navShrinkAndShowShadow = () =>{
            (window.scrollY >= 90) ? setShrinkAndShadow(true) : setShrinkAndShadow(false)
        }
        window.addEventListener('scroll', navShrinkAndShowShadow)
    },[])

    return (
        <div className='relative '>
            <div className={shrinkAndShadow ? 'flex mt-0 md:justify-evenly justify-between px-6 items-center fixed shadow w-full bg-slate-50 z-50' : 'flex mt-0 md:justify-evenly justify-between px-6 items-center fixed h-20 w-full bg-slate-50 z-50'}>
                <div className='flex space-x-3 items-center  py-2'>
                    <Image width={55} height={55} src={logo} alt='/' />
                    <p className='font-bold text-sm hidden md:flex'>Testy Treat</p>
                </div>
                <ul className='md:flex hidden space-x-6 font-bold'>

                    {
                        navLinks.map((link, index) => <li className={router.pathname == link.path ? 'text-red-600' : ''} key={index} ><Link href={link.path} alt='/'>{link.display}</Link></li>)
                    }
                </ul>
                <div className='flex space-x-4'>
                    <div className='relative'>
                        <HiOutlineShoppingCart className='w-6 h-6 cursor-pointer ' />
                        <p className='absolute -top-2 -right-2 text-white bg-red-600 w-4 h-6 flex items-center p-1 rounded-full'>{totalQuantity}</p>
                    </div>
                    <BsFillPersonFill className='w-6 h-6 cursor-pointer ' />
                    <GiHamburgerMenu onClick={toggleNav} className='w-6 h-6 cursor-pointer md:hidden ' />
                </div>
            </div>
            <div className={nav ? 'block transition-opacity ease-in duration-500' : 'hidden transition-opacity ease-in duration-300'}>
                <div className='bg-gray-600 opacity-40 z-10 h-screen absolute inset-0'></div>
                <div className='absolute right-20 inset-0 w-1/2 z-20 bg-red-100 text-slate-600 h-screen'>
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
