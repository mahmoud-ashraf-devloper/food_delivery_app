import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem , decreaseQuantity, increaseQuantity } from '../../../store/slices/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        return dispatch(removeItem({ id: item.id, price: item.price }));
    }
    const increase = () => {
        return dispatch(increaseQuantity({ id: item.id }));
    }
    const decrease = () => {
        if(item.quantity > 1) {
            return dispatch(decreaseQuantity({ id: item.id }));
        }
        return removeFromCart();
    }

    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <Image src={item.image01} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#"> {item.title} </a>
                        </h3>
                        <p className="ml-4">${item.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {item.quantity}</p>
                    <div>
                        <button onClick={increase} className='px-4 py-1 bg-red-100 rounded-l-lg shadow-xl hover:bg-red-600 hover:text-white font-bold'>+</button>
                        <button onClick={decrease} className='px-4 py-1 bg-red-100 rounded-r-lg shadow-xl hover:bg-red-600 hover:text-white font-bold'>-</button>
                    </div>
                    <div className="flex">
                        <button type="button" className="font-medium text-red-600 hover:text-red-500" onClick={removeFromCart}>Remove</button>
                    </div>
                </div>
            </div>
        </li>

    );
}

export default CartItem;
