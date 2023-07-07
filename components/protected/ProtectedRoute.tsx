import { redirect } from 'next/navigation'

const ProtectedRoute = ({children}:{children: React.ReactNode}) => {

    const userhere = true;

    if(!userhere){
        return redirect('/')
    }

    return (
        <>  
            {children}
        </>
    );
}
 
export default ProtectedRoute;
