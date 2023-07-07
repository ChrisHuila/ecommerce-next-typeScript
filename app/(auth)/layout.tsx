import Footer from "@/components/layout/Footer";

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            {children}
            <Footer />
        </>
      );
}
 
export default AuthLayout;