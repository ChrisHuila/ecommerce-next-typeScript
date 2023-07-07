import { redirect } from 'next/navigation'

interface Props {
    children: React.ReactNode
    isAllowed: boolean
}

const ProtectedRoute = ({ children, isAllowed }: Props) => {

    if(!isAllowed){
        return redirect('/')
    }

    return (
        <>  
            {children}
        </>
    );
}
 
export default ProtectedRoute;
