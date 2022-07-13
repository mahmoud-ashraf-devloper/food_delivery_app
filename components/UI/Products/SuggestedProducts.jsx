import React from 'react';
import allProducts from '../../../public/assets/fake-data/products';
import Product from './Product';

const SuggestedProducts = ({ products }) => {
    console.log(products);
    return (
        <div>
            <h1 className='py-6 text-3xl font-bold text-red-600 uppercase text-center underline underline-offset-4'>See Also</h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
                {products.map(product => <Product key={product.id} item={product} />)}
            </div>
        </div>
    );
}

export default SuggestedProducts;
