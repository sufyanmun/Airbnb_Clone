import React from 'react';
import Image from 'next/image';

function MediumCard() {
  return (
    <div className="flex overflow-x-scroll space-x-3 cursor-pointer rounded-xl overflow-y-auto scrollbar-hide p-3 -ml-3">
        <div className='relative cursor-pointer flex space-x-3 rounded-xl'>
            <div className='relative h-80 w-80 hover:scale-105 transform transition-duration-300 ease-out rounded-xl'>
            <Image src='https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=1440'
            layout="fill"
            className='rounded-xl'
            />
            <h3 className="absolute text-2xl text-gray-600 px-14"> Outdoor Getaways </h3>
            </div>
            <div className='relative h-80 w-80 hover:scale-105 transform transition-duration-300 ease-out rounded-xl'>
            <Image src='https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=1440'
            layout="fill"
            className='rounded-xl'
            />
            <h3 className="absolute text-2xl text-gray-600 px-20"> Unique Stays </h3>
            </div>
            <div className='relative h-80 w-80 hover:scale-105 transform transition-duration-300 ease-out rounded-xl'>
            <Image src='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=1440'
            layout="fill"
            className='rounded-xl'
            />
            <h3 className="absolute text-2xl text-gray-600 pl-24"> Entire Homes </h3>
            </div>
            <div className='relative h-80 w-80 hover:scale-105 transform transition-duration-300 ease-out rounded-xl'>
            <Image src='https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=1440'
            layout="fill"
            className='rounded-xl'
            />
            <h3 className="absolute text-2xl text-gray-600 pl-24">Pets Allowed</h3>
            </div>
        </div>
    </div>
  )
}

export default MediumCard