import firebase from "@/firebase/firebase";

const useQueryProducts = () => {

    const getProducts = async () => {
        
        const products = await firebase.getColletQuery('prueba')
    }
}
 
export default useQueryProducts;