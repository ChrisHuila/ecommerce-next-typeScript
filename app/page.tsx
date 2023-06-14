import Notification from "@/components/layout/Notification";
import GetHighlightedProducts from "@/components/products/GetHighlightedProducts";
import UploadProductTest from "@/components/mock/UploadProductTest";

export default function Home() {
    return (
        <>
            {/* <UploadProductTest /> */}

            {/* @ts-expect-error async server component */}
            <GetHighlightedProducts />
            <Notification />
        </>
    );
}
