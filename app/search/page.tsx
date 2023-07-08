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
//  MODULE STYLE - FORM? FOOTER - BUILD NEW PRODUCT - NEW SLIDER 

const Search = () => {
    const param = useSearchParams()
    const query = param.get('q')

    const { isLoading, data } = useQuery('search', () =>getProducts(query as string) );

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