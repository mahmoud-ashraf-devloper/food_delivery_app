import Head from "next/head";
import Image from "next/image";
import HeroImage from "../public/assets/images/hero.png";
import { FaGreaterThan } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import Category from "../components/UI/Category/Category";
import Features from "../components/UI/Features/Features";
import Products from "../components/UI/Products/Products";
import WhyFoodTreat from "../components/UI/WhyFoodTreat";
import HotPizza from "../components/UI/HotPizza";
import Testimonial from "../components/UI/Testimonial";
import Cart from "../components/UI/Cart/Cart";
import { useSelector } from "react-redux";

export default function Home() {
  const showCart = useSelector((state) => state.cartUi.showCart);

  return (
    <div className="relative md:w-full w-[160vw]">
      {showCart ? <Cart /> : null}

      <div className="max-w-[1240px] w-full flex flex-col md:flex-row items-center px-6 mx-auto min-h-screen">
        <div className="w-full md:mt-20 mt-10 leading-loose">
            <h1 className="uppercase md:text-2xl text-xl font-bold tracking-widest md:pt-0 pt-20 whitespace-nowrap">
              Easy Way To make an order
            </h1>
            <p className="md:text-6xl text-3xl font-bold py-10 leading-snug">
              <span className="text-red-600">Hungry?</span> Just Wait Food At{" "}
              <span className="text-red-600">Your Door.</span>
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid.
            </p>
            <div className="my-6 flex space-x-10">
              <button className="px-4 py-3 text-white font-bold  bg-red-600 rounded-xl hover:bg-slate-900 flex items-center justify-center">
                Order now <FaGreaterThan className="ml-3" />
              </button>
              <button className="px-4 py-2 bg-white  font-bold rounded-xl border-2 border-red-600 hover:brightness-125 hover:text-white hover:bg-red-600">
                See all Foods
              </button>
            </div>
            <div className="flex md:space-x-12 space-x-5 px-2 my-10">
              <p className="flex justify-center items-center font-bold whitespace-nowrap">
                <FaShippingFast className="bg-red-600 text-white rounded-full mr-3 w-9 h-9 p-1 " />{" "}
                No Shipping Charge
              </p>
              <p className="flex justify-center items-center font-bold whitespace-nowrap">
                <RiSecurePaymentLine className="bg-red-600 text-white rounded-full mr-3 w-9 h-9 p-1 " />{" "}
                100% secure checkout
              </p>
            </div>
        </div>
        <div className="my-4 w-5/6">
          <Image src={HeroImage} alt="/" />
        </div>
      </div>
      <Category />
      <Features />
      <Products />
      <WhyFoodTreat />
      <HotPizza />
      <Testimonial />
    </div>
  );
}
