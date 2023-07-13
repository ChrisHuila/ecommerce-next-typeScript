import HighlightedProducts from "@/components/products/HighlightedProducts";
import firebase from "@/firebase/index";

// Interface
import { Product } from "@/types";

export const revalidate = 60; 

const getProductsFire = async (category: string) => {
    const res = (await firebase.getColletBy(category)) as Array<Product>;
    return res;
};

const GetHighlightedProducts = async () => {
    const [ clothing, technology, sport ] = await Promise.all([getProductsFire("clothing"), getProductsFire("technology"), getProductsFire("sports and Fitness")]);
    
    return (
        <div className="highlighted-products_container">
            <HighlightedProducts
                products={clothing}
                category={"clothing"}
            />

            <HighlightedProducts
                products={technology}
                category={"technology"}
            />
            <HighlightedProducts
                products={sport}
                category={"Sports and Fitness"}
            />
        </div>
    );
};

export default GetHighlightedProducts;
