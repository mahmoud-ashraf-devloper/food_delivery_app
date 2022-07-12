import Image from 'next/image';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import ProductImage from "../../../public/assets/images/product_01.1.jpg";

const CartItem = ({item}) => {
    return (
        <div className='w-full flex'>
            <div className='mix-blend-darken pr-4'>
                <Image width={100} height={100} src={ProductImage} alt='/' />
            </div>
            <div className='flex w-full justify-between'>
                <div className='flex flex-col'>
                    <h1 className='text-lg font-bold capitalize my-3'>burger king</h1>
                    <div className='flex justify-between'>
                        <span className='text-xl font-medium'>2<span className='text-lg '>x</span></span>
                        <span className='text-xl font-bold text-red-600'>$28</span>
                    </div>
                    <div className='flex justify-between my-4'>
                        <button className='rounded-l-md font-bold bg-red-200 px-6 py-1 hover:brightness-125'>+</button>
                        <button className='rounded-r-md font-bold bg-red-200 px-6 py-1 hover:brightness-125'>-</button>
                    </div>
                </div>
                <div className='flex justify-center items-center cursor-pointer hover:brightness-150'>
                    <FaTrashAlt className='w-8 h-8 text-red-600' />
                </div>
            </div>
        </div>
    );
}

export default CartItem;
