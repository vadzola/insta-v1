import Image from "next/image";
import React from "react";
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8N4UEMzYX5SnxG0B5cozBLUjcn6lWj5pX6WlQ8M3u7nNnxKyfeMZFUOuc4z5_fK579ik&usqp=CAU"
           layout="fill" 
            className="object-contain"
            alt="image"
          />
        </div>
       
          <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              layout="fill"
              className="object-contain"
            />
         </div>
          <div className="relative mt-1">
            <div className="absolute top-2 left-2">
                <SearchIcon className="h-5 text-gray-500"/>
            </div>
            <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md" />
          </div>
         
         <div className="flex space-x-4 items-center">
            <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 easy-out"/>
            <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 easy-out"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMqZFwxQ1KtcZuKyMNB-C_O-nopObCKpn6A&usqp=CAU" alt="user-image" className="h-10 rounded-full cursor-pointer hover:scale-125 transition-transform duration-200 easy-out" />
         </div>
      </div>
      </div>
  );
}
