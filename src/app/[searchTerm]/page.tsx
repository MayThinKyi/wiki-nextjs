import getSearchResults from '@/api/getSearchResults'
import Item from '@/components/Item'
import { SearchResult,Result } from '@/types/types'
import React from 'react'
import {Metadata} from 'next'
type Props = {
    params:{
        searchTerm:string
    }
}
export const generateMetadata=async({params:{searchTerm}}: Props)=>{
    const resultsData:Promise<SearchResult>=getSearchResults(searchTerm);
    const  data=await resultsData;
    const results:(Result[]|undefined)=data?.query?.pages || undefined;
    if(results) return {
        title:searchTerm,
        description:`Search results for ${searchTerm}`
    } 
    return {
        title:`No results for ${searchTerm}`
    }
}

const SearchPage =async ({params:{searchTerm}}: Props) => {
    const resultsData:Promise<SearchResult>=getSearchResults(searchTerm);
    const  data=await resultsData;
    const results:(Result[]|undefined)=data?.query?.pages || undefined;
    /*
   {
    pageid: 38587686,
    ns: 0,
    title: 'List of Black Mirror episodes',
    index: 14,
    thumbnail: {
      source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Charlie_Brooker.jpg/50px-Charlie_Brooker.jpg',
      width: 50,
      height: 75
    },
    pageimage: 'Charlie_Brooker.jpg',
    extract: 'Black Mirror is a British science fiction anthology series created by Charlie Brooker. The programme...'
  }
    */
  return (
    <div className='mt-[100px] py-10 px-5 sm:px-10 text-white'>
        {results ? Object.values(results).map((result)=>{
            return <Item key={result.pageid}  result={result} />
        }) : <h1>No Results for {searchTerm.replaceAll('%20',' ')}...</h1>}
       
    </div>
  )
}

export default SearchPage