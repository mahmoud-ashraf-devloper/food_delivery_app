import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io'




import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../../store/slices/cartUiSlice';
import logo from '../../../public/assets/images/res-logo.png'
import CartItem from './CartItem';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    return (
        <div className='w-full  '>
            <div onClick={() => dispatch(toggleCart())} className="bg-zinc-900 opacity-70 absolute w-full h-full z-[100]"></div>
            <div className='min-h-screen   bg-white  z-[101] w-full md:w-1/2 lg:w-1/3 right-0 top-0 flex flex-col fixed '>
                <div className='h-1/4 flex justify-between py-4 px-4'>
                    <div className='flex flex-col items-center  py-2'>
                        <Image width={55} height={55} src={logo} alt='/' />
                        <p className='font-bold py-2 text-md '>Testy Treat</p>
                    </div>
                    <span onClick={() => dispatch(toggleCart())} className='flex justify-center items-center cursor-pointer hover:brightness-125'><IoIosCloseCircle className='w-8 h-8 text-red-600' /></span>
                </div>
                <div className='h-1/2 flex flex-col bg-red-100 px-4 py-4 hover:brightness-90  overflow-scroll'>
                    {(cart.items.length === 0 )? <p className='text-center text-slate-600'>Your cart is empty</p> : null}
                    {cart.items.map((item, index) => <CartItem key={index} item={item} />)}
                </div>
                <div className='h-1/4 absolute bottom-0  bg-red-100 w-full border-t-2 border-red-300 text-red-600'>
                    <div className="flex justify-between h-full px-3 items-center">
                        <div className='font-bold text-2xl'>
                            <span>Total: <span>${cart.totalPrice}</span></span>
                        </div>
                        <button className='font-bold bg-white px-4 rounded-md shadow-lg hover:bg-red-600 hover:text-white py-2'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
