import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-[#475569] text-white flex flex-wrap sm:flex-nowrap items-center justify-between py-6 px-5 sm:px-10  shadow-sm fixed top-0 right-0 left-0'>
      <div>
        <Link href={'/'}><h1 className='mb-2 sm:mb-0 text-xl sm:text-3xl font-semibold'>Wiki Rocket</h1></Link>
      </div>
      <div>
        <SearchBar/>
      </div>
    </div>
  )
}

export default Navbar
