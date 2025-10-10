import React, { useState } from 'react'
import logo from "./../assets/logo.png"
import { TiThMenu } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {

    const [IsOpen, setIsOpen] = useState(false);

    return (
        <nav className='w-full flex justify-between items-center paddingY-2 py-5 bg-white position: sticky top-0 z-10'>

            <button
                className='md:hidden text-[18px] hover:text-[#DC780B]'
                onClick={() => setIsOpen(!IsOpen)}>
                {IsOpen ? <FaTimes /> : <TiThMenu />}
            </button>

            {IsOpen && (
                <div className="absolute top-[70px] left-0 w-[100%] list-none rounded-3xl bg-white md:hidden flex flex-col items-start px-20 text-2xl gap-5 py-10 text-gray-600 font-semibold">
                    <li className="hover:text-[#DC780B] cursor-pointer">Home</li>
                    <li className="hover:text-[#DC780B] cursor-pointer">About us</li>
                    <li className="hover:text-[#DC780B] cursor-pointer">Menu</li>
                    <li className="hover:text-[#DC780B] cursor-pointer">Features</li>
                    <li className="hover:text-[#DC780B] cursor-pointer">Contact us</li>
                    <button className="button mt-3">Book now</button>
                </div>
            )}

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
