'use client';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'


const SearchBar = () => {
    const router=useRouter();
    const [search,setSearch]=useState('');
    const submitHandler=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        router.push(`/${search}`)
        setSearch('')
    }
  return (
    <form onSubmit={submitHandler} className='flex items-center gap-x-1'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} 
        type="text" placeholder='Search...' className='py-2 px-4 rounded-lg text-black  outline-blue-600' />
        <button type="submit" className='text-2xl'>🚀</button>
    </form>
  )
}

export default SearchBar
