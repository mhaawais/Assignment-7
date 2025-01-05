import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (

    <header className="bg-gray-300 flex items-center justify-between xs:flex-row py-5 px-14 border-b-2 border-yellow-800 sticky top-0 backdrop-blur z-10">
      <nav className=" flex md:flex md:items-center md:justify-center xs:gap-x-10 md:gap-x-64 font-bold uppercase">
        <div>
        <Link href={"/"} className="text-3xl text-dark dark:text-light">
          Data<span className="text-3xl text-myColor2"> Fetching</span>
        </Link>
        </div>
        <div className='flex xs:gap-4 md:gap-16'>
           <Link href={"/client"} target='_blank' className="rounded-lg text-myColor font-bold text-lg">Client Side Rendering</Link>
           <Link href={"/server"} target='_blank' className='rounded-lg text-myColor font-bold text-lg'>Server Side Rendering</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header
