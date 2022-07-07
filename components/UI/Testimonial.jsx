import React from 'react';
import NetworkImage from '../../public/assets/images/network.png'
import  Image  from 'next/image';

import AvatarImage1 from '../../public/assets/images/ava-1.jpg'
import AvatarImage2 from '../../public/assets/images/ava-2.jpg'
import AvatarImage3 from '../../public/assets/images/ava-3.jpg'

import Slider from "react-slick";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoPlaySpeed:3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='max-w-[1240px] mx-auto flex items-center min-h-screen justify-center'>
            <div className='grid md:grid-cols-5 gap-6 place-items-center px-3'>
                <div className="col-span-3 ">
                    <div>
                        <h1 className='text-red-600 text-xl font-bold'>Testimonial</h1>
                        <p className='text-5xl font-bold my-4'>The opinion Of our <span className='text-red-600'>customers</span></p>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequatur cum, error molestias hic animi fugit reiciendis possimus vel magni!</p>
                    </div>
                    
                    <div className='w-[350px] mt-8'>
                        <Slider {...settings}> 
                            <div className='flex flex-col items-center'>
                                <q className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora dignissimos ea accusamus itaque molestiae. Quae rem adipisci, soluta officiis modi accusantium tempora sapiente similique?</q>
                                <div className='flex my-8 items-center space-x-3'>
                                    <Image className='rounded-full' width={50} height={50} src={AvatarImage1} alt='/'/>
                                    <span className='font-bold'>Jhone Doe</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <q className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora dignissimos ea accusamus itaque molestiae. Quae rem adipisci, soluta officiis modi accusantium tempora sapiente similique?</q>
                                <div className='flex my-8 items-center space-x-3'>
                                    <Image className='rounded-full' width={50} height={50} src={AvatarImage2} alt='/'/>
                                    <span className='font-bold'>Jhone Doe</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <q className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora dignissimos ea accusamus itaque molestiae. Quae rem adipisci, soluta officiis modi accusantium tempora sapiente similique?</q>
                                <div className='flex my-8 items-center space-x-3'>
                                    <Image className='rounded-full' width={50} height={50} src={AvatarImage3} alt='/'/>
                                    <span className='font-bold'>Jhone Doe</span>
                                </div>
                            </div>
                            
                        </Slider>
                    </div>
                </div>
                <div className="col-span-2 ml-14 mt-8">
                    <Image src={NetworkImage} alt='/'/>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
