import Notification from "@/components/layout/Notification";
import GetHighlightedProducts from "@/components/products/GetHighlightedProducts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/layout/Banner";

export default function Home() {
    return (
        <>  
            <Header />
            <Banner />
            <main className="minvh">
                {/* @ts-expect-error async server component */}
                <GetHighlightedProducts />
                <Notification />
                
            </main>
            <Footer />
        </>
   
    );
}
