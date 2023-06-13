import Notification from "@/components/layout/Notification";
import UploadProductTest from "@/components/mock/UploadProductTest";
import HighlightedProducts from "@/components/products/HighlightedProducts";
import firebase from "@/firebase/index";

// Interface
import { Product } from "@/types";

export const revalidate = 3600; // revalidate every minute

const getProductsFire = async (category: string) => {
    const res = (await firebase.getColletBy(category)) as Array<Product>;
    return res;
};

export default async function Home() {
    const [clothing, technology] = await Promise.all([getProductsFire("clothing"), getProductsFire("technology")]);
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
            <Notification />
        </>
    );
}
