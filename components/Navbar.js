import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='flex justify-between p-10 bg-pink-400'>
        <div>
        <Image
              src="/logo.jpg"
              alt="Picture of the author"
              width={70}
              height={70}
              className='rounded-full'
              />
        <p className='font-bold text-xl'>Perception Stores</p> 
        </div>
        <div className='hidden md:flex'>
            <ul className='flex px-5 text-black space-x-4'>
                <li className='hover:text-pink-900 cursor-pointer'>
                  <Link href='/'>  Home </Link>
                </li>
                <li>
                 <Link href='About'> About Us</Link>
                </li>
                <li>
                  <Link href='Gallery'>Gallery</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div className='block sm:hidden z-10'>
             <AiOutlineMenu size={20}/>
            </div>

           {/* Mobile Menu */}

           <div className='sm:hidden absolute top-0 left-0 buttom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'>
           <ul className='px-5 text-white space-x-4'>
                <li className='p-4 text-4xl hover:text-gray-400 cursor-pointer'>
                  <Link href='/'>  Home </Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-400'>
                 <Link href='About'> About Us</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-400'>
                  <Link href='Gallery'>Gallery</Link>
                </li>
            </ul>
           </div>

        </div>
    </nav>
  )
}

export default Navbar