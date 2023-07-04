"use client"
import { useSearchParams } from 'next/navigation'
import firebase from '@/firebase/firebase';
import { useQuery } from 'react-query'
import { Product } from "@/types";

const getProducts = async (query: string) => {
    const res = (await firebase.getColletQuery(query)) as Array<Product>;
    return res;
};

const Search = () => {
    const param = useSearchParams()
    const query = param.get('q')

    if(!query) return;

    const { isLoading, isFetching, error, data, status } = useQuery('search', () =>getProducts(query) );

    console.log(data);
    
    return (
       <main className="minvh">
        <p> {query}</p>
       </main>
     );
}
 
export default Search;