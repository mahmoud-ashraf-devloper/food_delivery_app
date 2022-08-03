import React from 'react'
import  Image  from 'next/image'
import categoryImage01 from '../../../public/assets/images/category-01.png'
import categoryImage02 from '../../../public/assets/images/category-02.png'
import categoryImage03 from '../../../public/assets/images/category-03.png'
import categoryImage04 from '../../../public/assets/images/category-04.png'

const categoryData = [
    {
        display: 'Fast Food',
        imgUrl: categoryImage01
    },
    {
        display: 'Pizza',
        imgUrl: categoryImage02
    },
    {
        display: 'Asian Food',
        imgUrl: categoryImage03
    },
    {
        display: 'Row Meat',
        imgUrl: categoryImage04
    },
]
const Category = () => {

    return (
        <div className='max-w-[1240px]  mx-auto'>
            <div className='flex flex-col md:flex-row md:space-x-6 w-full py-4 mx-3 lg:h-72'>
                {
                    categoryData.map((categoryItem, index)=>
                        <div className='bg-red-100 lg:h-44 w-full ease-in duration-300 border-2  md:hover:-translate-y-6 hover:border-red-300 flex flex-col justify-center items-center py-4 my-2 rounded-2xl' key={index}>
                            <Image className='' src={categoryItem.imgUrl} alt="/" />
                            <h1 className='font-bold'>{categoryItem.display}</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Category;
