import { Product } from "@/types";
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

    async getCollet<T>(collect: string, limitNumber: number) {
        const items: Array<T> = [];
        const q = query(
            collection(this.db, collect),
            orderBy("date", "desc"),
            limit(limitNumber)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
            items.push(doc.data() as T);
        });
        return items;
    }
    async getColletBy(category: string) {
        const products: Array<Product> = [];
        const postRef = collection(this.db, "products");
        const q = query(postRef, where("category", "==", category));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(doc => {
                products.push(doc.data() as Product);
            });
            return products;
        } catch (error) {
            console.log(error + "desde obtener");
        }
    }
}

const firebase = new Firebase();

export default firebase;
