import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image 
            src="https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg"
            layout="fill" objectFit="cover"/>
        <div className="absolute top-1/2 w-full text-center">
            <p className="font-light text-slate-100 text-sm sm:text-lg">Not sure where to go?</p>
        <button className="text-purple-500 bg-white py-3 px-4 hover:shadow-xl active:scale-90 transition duration-150 shadow-md rounded-full font-bold my-1">Let's find out</button>
        </div>
    </div>
  )
}

export async function getStaticProps() {
    
}
export default Banner
