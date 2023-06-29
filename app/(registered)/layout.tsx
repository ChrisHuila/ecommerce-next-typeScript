import Header from "@/components/layout/Header";

const registeredLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Header />
            {children}
        </>
      );
}
 
export default registeredLayout;