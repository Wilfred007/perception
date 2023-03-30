import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className='flex justify-between p-10 bg-pink-400'>
        <div>
        <Image
              src="/logo.jpg"
              alt="Picture of the author"
              width={100}
              height={100}
              className='w-20  rounded-full'
              /> 
        </div>
        <div className='hidden md:flex'>
            <ul className='flex px-5 text-black space-x-4'>
                <li className='hover:text-pink-900 cursor-pointer'>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar