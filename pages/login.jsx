import React from 'react';
import Link from 'next/link';

const Login = () => {
    return (
        <div className='max-w-[1240px] md:mx-auto mx-3 flex justify-center '>
            <div className="max-w-[550px] flex flex-col w-full">
                <h1 className='text-4xl font-bold py-4 uppercase'>Login</h1>
                <div className='flex flex-col my-2'>
                    <label className='text-lg py-2'>Email Address<span className='text-red-600'>*</span></label>
                    <input placeholder='Enter email' className='py-2 border-2 px-3 focus:outline-none border-gray-300 rounded-md' type="text" />
                </div>
                <div className='flex flex-col my-2'>
                    <label className='text-lg py-2'>Password<span className='text-red-600'>*</span></label>
                    <input placeholder='Password' className='py-2 border-2 px-3 focus:outline-none border-gray-300 rounded-md' type="password" />
                </div>
                <div className="flex justify-between ">
                    <div className='flex space-x-2 items-center'>
                        <input className='w-4 h-4' type="checkbox" />
                        <label className='text-lg'>Remember me</label>
                    </div>
                    <Link href="/"><span className='text-red-600 text-lg'>forgot password?</span></Link>
                </div>
                <button className='uppercase my-3'>Login</button>

                <div className='flex items-center my-3 justify-center space-x-3'>
                    <span className='h-[2px] bg-gray-300 w-1/3'></span>
                    <span className='text-lg uppercase whitespace-nowrap'>or login with</span>
                    <span className='h-[2px] bg-gray-300 w-1/3'></span>
                </div>
                <div className='flex space-x-2 mb-3'>
                    <button className='w-1/2 text-white py-1 bg-blue-900   uppercase hover:bg-blue-800'>Facebook</button>
                    <button className='w-1/2 text-white py-1 bg-yellow-700 uppercase hover:bg-yellow-600'>Google</button>
                </div>
                <div className="flex justify-center mb-4 text-lg cursor-pointer">
                    <Link href='/register'><p>Dont have an account yet? <span className='text-red-500'>register now?</span></p></Link>

                </div>
            </div>
        </div>
    );
}

export default Login;
