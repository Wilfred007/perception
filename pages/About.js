import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div>
     <section>
          <div className='flex flex-col-reverse md:flex-row items-center px-6 mx-10 mt-10 space-y-0 md:space-y-0'>
            <div className='flex flex-col mb-32 space-y-12 md: w-1/2'>
              <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>Meet Our CEO</h1>
              <p className='max-w-sm text-center text-xl text-gray-700 md:text-left'>Our CEO is a passionate entreprenuer with a passion to create a whole new world of fashion for the modern day trendy woman, commited and driven by a strong sense of purpose. </p>
              <p className='max-w-sm text-center text-2xl font-bold text-gray-700 md:text-left'>"We are a fashion store that desires to change the narrative in fashion that says it has to be expensive to be authentic. But in a VPS we glam you up with unique pieces on a budget" </p>

              <h2 className='text-gray-900 text-xl '>Vannesa Dooshima Angban</h2>
            </div>

            <div className='md:w-1/2'>
            <Image
              src="/ceo (1).JPG"
              alt="Picture of the author"
              width={300}
              height={300}
              className='rounded-full'
              />
            </div>
          </div>
        </section> 


        <section>
         <h1 className='font-bold text-gray-900  text-3xl mx-20 items-center justify-center mt-10 '>GET THE LOOK</h1>
          <div>
            <div className='flex flex-col-reverse md:flex-row items-center justify-center  mx-10 mt-10 space-y-0 md:space-y-6'>
            
              <div>              
              <Image
              src="/tops.jpg"
              alt="Picture of the author"
              width={200}
              height={200}
              className='rounded-lg mx-5'
              />
              <p className='text-2xl font-bold text-center mt-5 mx-5'>Tops</p>
              </div>


             <div>              
              <Image
              src="/shoes icon.jpg"
              alt="Picture of the author"
              width={200}
              height={200}
              className='rounded-lg mx-5'
              />
              <p className='text-2xl font-bold text-center mt-5 mx-5'>Shoes</p>
              </div>

             <div>              
              <Image
              src="/Bags icson.jpg"
              alt="Picture of the author"
              width={200}
              height={200}
              className='rounded-lg mx-5'
              />
              <p className='text-2xl font-bold mt-10 text-center mx-5'>Bags</p>
              </div>
            </div>
          </div>
        </section>
        <footer className='bg-black mt-10'>
          <div className='flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:space-y-0'>
            <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
              <div>
              <Image
              src="/logo.jpg"
              alt="Picture of the author"
              width={200}
              height={200}
              className='w-20  rounded-full'
              /> 
              <p className='text-white mt-4 text-center'>Perception Stores</p>
              </div>
              <div className='flex justify-center space-x-4'>
                <Link href='#'
                  
                /> 
                
              </div>
            </div>

          </div>
        </footer>  
    </div>
  )
}

export default About