import React from 'react';
import FeatureImage01 from '../../../public/assets/images/service-01.png'
import FeatureImage02 from '../../../public/assets/images/service-02.png'
import FeatureImage03 from '../../../public/assets/images/service-03.png'
import Image from 'next/image';

const featuresData = [
    {
        title: 'Quick Delivery',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facilis reiciendis.',
        image: FeatureImage01
    },
    {
        title: 'Supper Dine In',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facilis reiciendis.',
        image: FeatureImage02
    },
    {
        title: 'Easy Pick Up',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facilis reiciendis.',
        image: FeatureImage03
    },
]


const Features = () => {
    return (
        <div className='max-w-[1240px] w-full mx-auto min-h-screen flex flex-col items-center'>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='py-8 text-red-600 text-xl font-bold uppercase tracking-widest'>What We Serve</h1>
                <span className=' md:text-5xl text-3xl font-bold'>Just Set Home</span>
                <span className='py-2 md:text-5xl text-3xl font-bold'>We Will <span className='text-red-600'>Take Care</span></span>
                <div className='text-slate-600 text-center my-6 mx-3'>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nihil.</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sequi vero.</span>
                </div>
            </div>
            <div className='w-full grid md:grid-cols-3 gap-8 py-14 mx-3'>

                {
                    featuresData.map((feature, index) =>
                        <div className='text-center' key={index}>
                            <div className='w-32 mx-auto'>
                                <Image src={feature.image} alt='/' />
                            </div>
                            <h1 className='font-bold py-4 text-slate-600'>{feature.title}</h1>
                            <p>{feature.description}</p>
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default Features;
