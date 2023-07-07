import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProtectedRoute from "@/components/protected/ProtectedRoute";

const registeredLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>  
            <ProtectedRoute isAllowed={true}>
                <Header />
                {children}
                <Footer />
            </ProtectedRoute>
            
        </>
      );
}
 
export default registeredLayout;