import React from 'react'
import logo from "./../assets/logo.png"
import { TiThMenu } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";

export default function Navbar() {
    return (
        <nav className='w-full flex justify-between items-center paddingY-2 py-5 bg-white position: sticky top-0 z-10'>

            <button className='md:hidden text-[18px] hover:text-[#DC780B]'><TiThMenu /></button>

            <div className='flex items-center gap-10'>
                <img src={logo} alt="Logo" className="w-[45px]" />

                <ul className='md:flex hidden gap-8 text-gray-600 font-semibold'>
                    <li className='opacity-60 hover:text-[#DC780B] cursor-pointer ease-in-out duration-300'>Home</li>
                    <li className='opacity-60 hover:text-[#DC780B] cursor-pointer ease-in-out duration-300'>About us</li>
                    <li className='opacity-60 hover:text-[#DC780B] cursor-pointer ease-in-out duration-300'>Menu</li>
                    <li className='opacity-60 hover:text-[#DC780B] cursor-pointer ease-in-out duration-300'>Features</li>
                    <li className='opacity-60 hover:text-[#DC780B] cursor-pointer ease-in-out duration-300'>Contact us</li>
                </ul>
            </div>

            <div>
                <button className='button hidden md:block'>Book now</button>
                <button className='md:hidden text-[18px] hover:text-[#DC780B]'><FaPhone /></button>
            </div>
        </nav>
    )
}
