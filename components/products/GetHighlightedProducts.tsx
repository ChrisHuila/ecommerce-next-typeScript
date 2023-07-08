import HighlightedProducts from "@/components/products/HighlightedProducts";
import firebase from "@/firebase/index";

// Interface
import { Product } from "@/types";

export const revalidate = 3600; // revalidate every minute


const getProductsFire = async (category: string) => {
    const res = (await firebase.getColletBy(category)) as Array<Product>;
    return res;
};

const GetHighlightedProducts = async () => {
    const [clothing, technology] = await Promise.all([getProductsFire("clothing"), getProductsFire("technology")]);
    
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
        </div>
    );
};

export default GetHighlightedProducts;
