import { Product, Categories } from "@/types";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    query,
    where,
    getDocs,
    orderBy,
    limit,
    updateDoc,
    increment,
} from "firebase/firestore";

export class Firebase {
    app;
    db;
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
    }
    // add to the collection
    async collect(element: object, nameCollect: string) {
        try {
            const postRef = doc(collection(this.db, nameCollect));
            await setDoc(postRef, {
                id: postRef.id,
                ...element,
            });
        } catch (error) {
            console.log(error, "desde agregar colleccion");
        }
    }

    async getCollet(collect: string, limitNumber: number) {
        const items: Array<Product | Categories> = [];
        const q = query(
            collection(this.db, collect),
            orderBy("date", "desc"),
            limit(limitNumber)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
            items.push(doc.data() as Product | Categories);
        });
        return items;
    }
}

const firebase = new Firebase();

export default firebase;
