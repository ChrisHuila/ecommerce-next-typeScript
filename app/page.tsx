import Notification from "@/components/layout/Notification";
import GetHighlightedProducts from "@/components/products/GetHighlightedProducts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UploadProductTest from "@/components/mock/UploadProductTest";
import { Suspense } from 'react'
import Banner from "@/components/layout/Banner";

export default function Home() {
    return (
        <>  
            <Header />
            <Banner />
            <main className="minvh">
                {/* <UploadProductTest /> */}
                 <Suspense fallback={<p>Loading feed...</p>}>
                    {/* @ts-expect-error async server component */}
                    <GetHighlightedProducts />
                 </Suspense>
                
                <Notification />
            </main>
            <Footer />
        </>
   
    );
}
