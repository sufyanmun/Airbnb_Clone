import React from "react";
import Image from "next/image";
import img from "next/legacy/image";

function LargeCard(img, title, desciption, buttonText) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">The Greatest Outdoors</h3>
        <p> Wishlist curated by Airbnb.</p>
        <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>Get Inspired</button>
      </div>
    </section>
  );
}

export default LargeCard;
