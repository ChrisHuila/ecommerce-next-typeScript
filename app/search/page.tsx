"use client"
import { useSearchParams } from 'next/navigation'

const Search = () => {
    const param = useSearchParams()
    const query = param.get('q')

    return (
       <main className="minvh">
        
       </main>
     );
}
 
export default Search;