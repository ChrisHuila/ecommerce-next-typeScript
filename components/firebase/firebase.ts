import { Product, Categories } from '@/types';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './config';
import { 
    getFirestore, 
    collection,  
    query,
    getDocs, 
    orderBy,
    limit,
    Firestore,
 } from "firebase/firestore";


class Firebase {
    app
    db
    constructor(){
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
    }

    async getCollet(collect: string, limitNumber: number ){

        const items: Array<Product | Categories> = [];
        const q = query(collection(this.db, collect), orderBy("date", "desc"),limit(limitNumber));
        
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            items.push(doc.data() as Product | Categories);
        });
        return items;
    }
}

const firebase = new Firebase();

export default firebase;