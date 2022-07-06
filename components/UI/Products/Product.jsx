import React from 'react';
import Image from 'next/image';

const Product = ({item}) => {
    return (

        <div  className='flex flex-col items-center justify-center bg-white shadow-lg rounded-md py-6 px-6'>
            <span className='hover:scale-75 ease-in-out duration-500 w-full h-full'>
                <Image src={item.image01} width={500} height={500} alt='/' />
            </span>
            <span className='py-5 font-bold'>{item.title}</span>
            <div className='mx-2 w-full flex justify-between items-center'>
                <span className='font-bold text-red-600'>${item.price}</span>
                <button className='px-4 py-1 bg-red-600 text-white hover:brightness-125 rounded-lg'>Add To Cart</button>
            </div>

        </div>

    );
}

export default Product;
