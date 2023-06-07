import HighlightedProducts from "@/components/products/HighlightedProducts";
import firebase from "@/firebase/index";
// Interface
import { Categories, Product } from "@/types";

export const revalidate = 3600; // revalidate every minute

const getProducts = async () => {
    const res = (await firebase.getCollet("productos", 20)) as Array<Product>;
    return res;
};

const getCategories = async () => {
    const res = (await firebase.getCollet("categorias", 3)) as Array<Categories>;
    return res;
};

export default async function Home() {
    const [products, categories] = await Promise.all([getProducts(), getCategories()]);

    return (
        <>
            <HighlightedProducts
                categories={categories}
                products={products}
            />
        </>
    );
}
