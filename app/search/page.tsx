"use client"
import { useSearchParams } from 'next/navigation'
import firebase from '@/firebase/firebase';
import { useQuery } from 'react-query'
import { Product } from "@/types";
import ProductResult from '@/components/search/ProductResult';
import NoProductResult from '@/components/search/NoProductResult';

const getProducts = async (query: string) => {
    const res = (await firebase.getColletQuery(query)) as Array<Product>;
    return res;
};
//  NEW PRODUCT MODULE STYLE - FORM? FOOTER - PROTECTECT ROOT - SKELETON? - BUILD NEW PRODUCT - NEW SLIDER 

const Search = () => {
    const param = useSearchParams()
    const query = param.get('q')

    if(!query) return;

    const { isLoading, isFetching, error, data, status } = useQuery('search', () =>getProducts(query) );

    const hasProduct = data && data.length > 0;
    
    return (
       <main className="minvh container">
        {!isLoading && !hasProduct 
            && <NoProductResult />
        }

        {!isLoading &&  hasProduct 
        && <ProductResult
            products={data}
            />
        }
       </main>
     );
}
 
export default Search;