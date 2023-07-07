"use client"
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();

    return (
        <>  
            <Header />
            <QueryClientProvider client={queryClient}>
                { children }
            </QueryClientProvider>
            <Footer />
        </>
      );
}
 
export default SearchLayout;