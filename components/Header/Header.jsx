import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../public/assets/images/res-logo.png'
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'

import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { IoIosCloseCircle } from 'react-icons/io'
import { store } from '../../store/store';
import { toggleCart } from '../../store/slices/cartUiSlice';

const navLinks = [

    {
        display: 'Login',
        path: '/login',
    },
    {
        display: 'Register',
        path: '/register',
    },

]



const Header = () => {
    const router = useRouter()
    const [nav, setNav] = useState(false);
    const [shrinkAndShadow, setShrinkAndShadow] = useState(false);

    const showCart = useSelector(state => state.cartUi.showCart);
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const toggleNav = () => {
        setNav(!nav)
    }


    useEffect(() => {
        const navShrinkAndShowShadow = () => {
            (window.scrollY >= 90) ? setShrinkAndShadow(true) : setShrinkAndShadow(false)
        }
        window.addEventListener('scroll', navShrinkAndShowShadow)
    }, [])

    return (
        <div className='w-full'>
            <div className={shrinkAndShadow ? 'flex md:px-20 px-4 justify-between  items-center fixed shadow w-full bg-slate-50 z-50' : ' flex  justify-between md:px-20 px-4 items-center fixed h-20 w-full bg-slate-50 z-50'}>
                <Link href='/'>
                    <div className='flex space-x-3 items-center cursor-pointer py-2'>
                        <Image width={55} height={55} src={logo} alt='/' />
                        <p className='font-bold text-sm hidden md:flex'>Testy Treat</p>
                    </div>
                </Link>

                <div className='flex space-x-4'>
                    <button onClick={() => dispatch(toggleCart())} className='relative'>
                        <HiOutlineShoppingCart className='w-6 h-6 cursor-pointer ' />
                        <p className='absolute -top-2 -right-2 text-white bg-red-600 w-4 h-6 flex items-center p-1 rounded-full'>{totalQuantity}</p>
                    </button>
                    <BsFillPersonFill className='w-6 h-6 cursor-pointer ' />
                    <GiHamburgerMenu onClick={toggleNav} className='w-6 h-6 cursor-pointer md:hidden ' />
                    <ul className='md:flex hidden space-x-6 font-bold'>
                    {
                        navLinks.map((link, index) => <li className={router.pathname == link.path ? 'text-red-600' : ''} key={index} ><Link href={link.path} alt='/'>{link.display}</Link></li>)
                    }
                </ul>
                </div>
            </div>
            <div className={nav ? 'block transition-opacity ease-in duration-500 ' : 'hidden transition-opacity ease-in duration-300 '}>
                <div className='bg-gray-600 opacity-40 z-10 h-screen absolute inset-0'></div>
                <div className='absolute right-20 inset-0 md:w-1/2 z-20 bg-red-100 text-slate-600 h-screen z-[100]'>
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
