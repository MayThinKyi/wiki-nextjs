import { Result } from '@/types/types'
import Link from 'next/link'
import React from 'react'

type Props = {
    result:Result
}

const Item = ({result}: Props) => {
  return (
   <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target='_blank'>
     <div className='mb-6 border rounded-lg p-3 sm:p-5 flex  gap-2 sm:gap-10'>
        <div className='w-[60%] sm:w-auto '>
            <img  src={result.thumbnail?.source || 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'}
            alt={result.title}
           className='w-[50px] h-[72px] rounded-lg object-cover'             
            loading="lazy"   />
        </div>
        <div>
            <h1 className='mb-3 sm:text-lg font-semibold'>{result.title}</h1>
            <p className='text-sm sm:text-lg line-clamp-3'>{result.extract}</p>
        </div>
    </div>
   </Link>
  )
}

export default Item