import React from 'react';
import Image from 'next/image';
import logo from '../../public/assets/images/res-logo.png'
import {AiOutlineSend} from 'react-icons/ai'

import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'


const Footer = () => {
    return (
        <div className='min-h-[400px] w-full  bg-red-100 flex justify-center items-center'>
            <div className='max-w-[1240px] px-8 mx-auto w-full '>
                <div className="w-full grid lg:grid-cols-4 gap-6 md:grid-cols-2 mx-4">
                    <div className=" col-span-1 flex flex-col my-6 md:my-0 md:justify-start md:items-start justify-center items-center">
                            <Image width={70} height={70} src={logo} alt='/' />
                            <p className='font-bold text-sm my-2'>Testy Treat</p>
                        <p>Lorem ipsum, dolor sit amet csoom vel.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="col-span-1 flex flex-col">
                            <h1 className='font-bold text-lg'>Delivery Time</h1>
                            <span className='font-bold mt-6'>Sunday - Thursday</span>
                            <span>10PM - 11PM</span>

                            <span className='font-bold mt-6'>Friday - Saturday</span>
                            <span>Off days</span>
                    </div>
                    <div className="col-span-1 ">
                            <h1 className='font-bold text-lg'>Contact</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid impedit unde vero.</p>
                            <h1 className='font-bold text-sm'>Phone +201154557909</h1>
                            <h1 className='font-bold text-sm'>Email mahmoud.a.developer@gmail.com</h1>
                       
                    </div>
                    <div className="col-span-1 flex flex-col items-center">
                        <div className='flex flex-col w-full'>
                            <h1 className='font-bold text-lg'>Newsletter</h1>
                            <p>Subscribe To Our Newsletter</p>
                            <div className='flex py-8 w-full'>
                                <input className='h-10 w-full rounded-l-lg border-2 border-red-200 border-r-none placeholder:pl-3' placeholder='Enter Your Email' type="text" />
                                <button className='bg-blue-500 w-10 flex justify-center items-center rounded-r-lg'><AiOutlineSend /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row md:justify-between flex-col mx-6 my-3 space-y-3  mt-14'>
                    <p>All Rights Are Reserved Mahmoud Ashraf 2022</p>
                    <div className='flex space-x-3'>
                        <p className='font-bold'>Follow Us On: </p>
                        <FaFacebookSquare className='w-6 h-6 hover:text-red-600  cursor-pointer' />
                        <FaTwitter className='w-6 h-6 hover:text-red-600  cursor-pointer' />
                        <AiFillInstagram className='w-6 h-6 hover:text-red-600  cursor-pointer' />
                        <BsGithub className='w-6 h-6 hover:text-red-600  cursor-pointer' />
                        <BsLinkedin className='w-6 h-6 hover:text-red-600  cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
