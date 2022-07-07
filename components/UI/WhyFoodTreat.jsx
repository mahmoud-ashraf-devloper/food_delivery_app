import React from 'react';
import Image from 'next/image';
import LocationImage from '../../public/assets/images/location.png'
import { FaCheck } from 'react-icons/fa'
const WhyFoodTreat = () => {
    return (
        <div className='max-w-[1240px] mx-auto min-h-screen flex items-center'>
            <div className='grid md:grid-cols-5 gap-6 items-center'>
                <div className='col-span-3 '>
                    <Image className='' src={LocationImage} alt='/' />
                </div>
                <div className='col-span-2 px-8 md:px-0'>
                    <h1 className='font-bold text-5xl'>Why to <span className='text-red-600'>chose us?</span></h1>
                    <p className='my-8 text-sm text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, minus autem amet aliquam optio id hic tempora consectetur ea sint!</p>
                    <div className=' my-4'>
                        <div className='flex '>
                            <FaCheck className='w-7 h-7 mr-3  text-red-600 rounded-full border-2 border-red-600 p-1' />
                            <span className='capitalize mb-2 text-xl font-bold'>fresh and testy food</span>
                        </div>
                        <p className='ml-10 text-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta.</p>
                    </div>
                    <div className=' my-4'>
                        <div className='flex '>
                            <FaCheck className='w-7 h-7 mr-3  text-red-600 rounded-full border-2 border-red-600 p-1' />
                            <span className='capitalize mb-2 text-xl font-bold'>Quality Support</span>
                        </div>
                        <p className='ml-10 text-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta.</p>
                    </div>
                    <div className=' my-4'>
                        <div className='flex '>
                            <FaCheck className='w-7 h-7 mr-3  text-red-600 rounded-full border-2 border-red-600 p-1' />
                            <span className='capitalize mb-2 text-xl font-bold'>Food is always fresh and hot</span>
                        </div>
                        <p className='ml-10 text-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta.</p>
                    </div>
                    <div className=' my-4'>
                        <div className='flex '>
                            <FaCheck className='w-7 h-7 mr-3  text-red-600 rounded-full border-2 border-red-600 p-1' />
                            <span className='capitalize mb-2 text-xl font-bold'>Order from any place</span>
                        </div>
                        <p className='ml-10 text-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default WhyFoodTreat;
