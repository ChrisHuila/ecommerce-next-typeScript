import UploadProductTest from "@/components/mock/UploadProductTest";
import HighlightedProducts from "@/components/products/HighlightedProducts";
import firebase from "@/firebase/index";

// Interface
import { ProductFire } from "@/types";

export const revalidate = 3600; // revalidate every minute

const getProductsFire = async (category: string) => {
    const res = (await firebase.getColletBy(category)) as Array<ProductFire>;
    return res;
};

export default async function Home() {
    const [clothing, technology] = await Promise.all([
        getProductsFire("clothing"),
        getProductsFire("technology"),
    ]);
    return (
        <>
            {/* <UploadProductTest /> */}

            <HighlightedProducts
                products={clothing}
                category={"clothing"}
            />
            <HighlightedProducts
                products={technology}
                category={"technology"}
            />
        </>
    );
}
