"use client"
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProtectedRoute from "@/components/protected/ProtectedRoute";
import { productsContext } from "@/context/productsContext";
import { useContext } from "react";

const RegisteredLayout = ({children}: {children: React.ReactNode}) => {
    const { user } = useContext(productsContext);

    return (
        <>  
            <ProtectedRoute isAllowed={!!user?.roles?.includes('admin')}>
                <Header />
                {children}
                <Footer />
            </ProtectedRoute>
            
        </>
      );
}
 
export default RegisteredLayout;