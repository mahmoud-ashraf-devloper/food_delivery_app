import React, { useState, useEffect } from 'react';
import AllProducts from '../../public/assets/fake-data/products'
import Product from './Products/Product';
const HotPizza = () => {
    const [hotPizza, setHotPizza] = useState([]);

    useEffect(()=>{
        const filtered = AllProducts.filter(product => product.category == 'Pizza')
        setHotPizza(filtered)
        console.log(filtered);
    },[])

    return (
        <div className="max-w-[1240px] mx-auto">
            <h1 className='text-4xl text-center text-red-600 font-bold my-8 mb-14'>Hot Pizza</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    hotPizza.map(product => (<Product key={product.id} item={product}/>))
                }
            </div>
        </div>
    );
}

export default HotPizza;
