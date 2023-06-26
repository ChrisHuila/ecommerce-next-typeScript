import Notification from "@/components/layout/Notification";
import GetHighlightedProducts from "@/components/products/GetHighlightedProducts";
import Header from "@/components/layout/Header";
import UploadProductTest from "@/components/mock/UploadProductTest";

export default function Home() {
    return (
        <>  
            <Header />
            <main className="minvh">
                {/* <UploadProductTest /> */}

                {/* @ts-expect-error async server component */}
                <GetHighlightedProducts />
                <Notification />
            </main>
        </>
   
    );
}
