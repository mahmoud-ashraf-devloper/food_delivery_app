import React, { useState, useEffect } from 'react';
import Burger from '../../../public/assets/images/hamburger.png'
import Bread from '../../../public/assets/images/bread.png'
import Pizza from '../../../public/assets/images/pizza.png'
import Image from 'next/image';
import AllProductsData from '../../../public/assets/fake-data/products.js';
import Product from './Product';
const AllFilters = [
    {
        id: 0,
        name: 'All',
        keyword: 'all',
    },
    {
        id: 1,
        name: 'Pizza',
        keyword: 'pizza',
        image: Pizza,
    },
    {
        id: 2,
        name: 'burger',
        keyword: 'burger',
        image: Burger,
    },
    {
        id: 3,
        name: 'Bread',
        keyword: 'bread',
        image: Bread,
    },
]
const Products = () => {

    const [allProducts, setAllProducts] = useState(AllProductsData);
    const [filters, setFilters] = useState(AllFilters)
    const [currentFilter, setCurrentFilter] = useState(AllFilters[0])

    const doFilter = (filter) => {
        setCurrentFilter(filter)
        if (filter.keyword === 'all') {
            setAllProducts(AllProductsData)
        } else {
            const filtered = AllProductsData.filter((product) => (product.category.toLowerCase() === filter.keyword))
            setAllProducts(filtered)
        }
    }
    return (
        <div className='max-w-[1240px] mx-auto min-h-screen'>
            <h1 className="text-center text-3xl font-bold uppercase tracking-widest py-8">Popular Food</h1>
            <div className="my-3 mx-3 px-2 flex justify-center items-center h-16 rounded-xl text-white bg-red-500">
                {filters.map((filter, index) =>
                    <div onClick={() => { doFilter(filter)}} key={index} className={filter.id === currentFilter.id? "font-bold cursor-pointer flex justify-center items-center mx-4 bg-white text-red-600 px-3 py-1 rounded-lg text-center" : "font-bold cursor-pointer flex justify-center items-center mx-4"}>
    
                        {(index === 0) ? '' : <span className='w-8 h-8 mx-2 hidden md:flex'><Image src={filter.image} alt='/' /></span>}
    
                        {filter.name}
                    </div>
                )}
            </div>
            <div className='grid md:grid-cols-3 gap-6 lg:grid-cols-4 my-6 mx-3'>
    
                {
                    allProducts.map((item, index) =>
                        <Product key={index} item={item} />
                    )
                }
            </div>
        </div>
    );
    
}


export default Products;
