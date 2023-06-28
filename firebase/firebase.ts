import { Product } from "@/types";
import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword } from "firebase/auth";
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
    auth;

    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
        this.auth = getAuth(this.app)
    }
    // Sign up
    async signup(email: string, password: string) {
        try {
            await createUserWithEmailAndPassword(this.auth, email, password)
        } catch (error) {
            console.log('error', error);
        }
    }
    
    // log in
    async login(email: string, password: string) {
        return await signInWithEmailAndPassword(this.auth, email, password)
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
