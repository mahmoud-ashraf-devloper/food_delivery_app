import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi'
import allProducts from '../../../public/assets/fake-data/products'
import SuggestedProducts from '../../../components/UI/Products/SuggestedProducts';
import { addItem } from '../../../store/slices/cartSlice';
import { useDispatch } from 'react-redux'

const Index = ({ item, suggestedProducts }) => {
    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch();
    const itemData = { ...item, quantity: 1 };
    const addToCart = () => {
        dispatch(addItem(itemData))
    }

    const [product, setItem] = useState(item);
    const [suggested, setSuggested] = useState(suggestedProducts);
    const [imageInDisplay, setImageInDisplay] = useState(product.image01);
    const toggleImage = (image) => {
        setImageInDisplay(product.image)
    }
    return (
        <div className='min-h-screen  pt-24 max-w-[1240px] mx-auto '>
            <div className="grid md:grid-cols-2">
                <div className='col-span-1 flex flex-col'>
                    <div className='mix-blend-darken md:w-3/4'>
                        <Image src={imageInDisplay} alt='/' />
                    </div>
                    <ul className='flex justify-start my-4 space-x-3'>
                        <li className='w-28 cursor-pointer hover:shadow-xl rounded-lg border-4 border-red-400'>
                            <button className='mix-blend-darken' onClick={() => setImageInDisplay(product.image01)}><Image src={product.image01} alt='/' /></button>
                        </li>
                        <li className='w-28 cursor-pointer hover:shadow-xl rounded-lg'>
                            <button className='mix-blend-darken' onClick={() => setImageInDisplay(product.image02)}><Image src={product.image02} alt='/' /></button>
                        </li>
                        <li className='w-28 cursor-pointer hover:shadow-xl rounded-lg'>
                            <button className='mix-blend-darken' onClick={() => setImageInDisplay(product.image03)}><Image src={product.image03} alt='/' /></button>
                        </li>
                    </ul>
                </div>
                <div className='col-span-1 pl-4 p-6'>
                    <h1 className='text-4xl font-bold'>{product.title}</h1>
                    <h1 className='text-3xl my-8 font-bold text-red-600'>${product.price}</h1>
                    <div className='flex  my-8'>
                        <AiTwotoneStar className='w-6 h-6 text-yellow-500' />
                        <AiTwotoneStar className='w-6 h-6 text-yellow-500' />
                        <AiTwotoneStar className='w-6 h-6 text-yellow-500' />
                        <AiTwotoneStar className='w-6 h-6 text-gray-500' />
                        <AiTwotoneStar className='w-6 h-6 text-gray-500' />
                    </div>
                    <p>{product.desc}</p>
                    <div className='flex w-full my-8'>
                        <button onClick={addToCart} className="w-full rounded-lg font-bold px-4 py-2 bg-red-600 text-white hover:bg-red-700 flex items-center justify-center">Add To Shopping Cart <HiOutlineShoppingCart className='w-6 h-6 ml-4' /></button>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <SuggestedProducts products={suggested} />
            </div>
        </div>
    );
}
export async function getServerSideProps(context) {
    const { id } = context.query;
    const item = { ...allProducts.find(item => item.id === id) };
    const suggestedProducts = allProducts.filter(product => product.category === item.category);
    return {
        props: {
            item,
            suggestedProducts
        }
    }
}
export default Index;
