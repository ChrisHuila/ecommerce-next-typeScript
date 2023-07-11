import { Product, Users } from "@/types";
import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    sendEmailVerification,
    User
} from "firebase/auth";
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
    storage;

    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
        this.auth = getAuth(this.app)
        this.storage = getStorage(this.app)
    }
    // Sign up
    async signup(name: string,  email: string, password: string) {
        const user = await createUserWithEmailAndPassword(this.auth, email, password)
        const userID = user.user.uid;
        
        const userData = {
            name,
            email,
        }
        await this.collectUser(userData,userID );

        await updateProfile(this.auth.currentUser as User, {
        displayName: name 
        })

        return await sendEmailVerification(this.auth.currentUser as User)
      
    }
    
    // log in
    async login(email: string, password: string) {
        return await signInWithEmailAndPassword(this.auth, email, password)
    }

    // log out
    async logout(){
        await signOut(this.auth)
    }
    
    // add to the user collection 
    async collectUser(element: object, iduser: string) {
        try {
            const productRef = doc(collection(this.db, 'users'));
            await setDoc(productRef, {
                id: iduser,
                ...element,
            });
            console.log('success from user', productRef.id);
            
        } catch (error) {
            console.log(error, "desde agregar usuario");
        }
    }

    // add to the collection
    async collect(element: object, nameCollect: string) {
        try {
            const productRef = doc(collection(this.db, nameCollect));
            await setDoc(productRef, {
                id: productRef.id,
                ...element,
            });
            // console.log('success from collect', productRef.id);
            
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
        const productRef = collection(this.db, "products");
        const q = query(productRef, where("category", "==", category));
        
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
    async getColletUser(id: string) {
        const users: Array<Users> = [];
        const userRef = collection(this.db, "users");
        const q = query(userRef, where("id", "==", id));
        
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(doc => {
                users.push(doc.data() as Users);
            });
            return users;
        } catch (error) {
            console.log(error + "desde obtener");
        }
    }

    async getColletQuery(search: string){
        const products: Array<Product> = [];
        const productRef = collection(this.db, "products");
        const q = query(productRef, where("tags", "array-contains", search));

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

    async uploadImage(image: File, path: string){
        try {
            const storeRef = ref(this.storage, path);
            await uploadBytes(storeRef, image);

            const url = await getDownloadURL(storeRef)
            return url;

        } catch (error) {
                console.error("hubo un error con la imagen")
        }

    }
}

const firebase = new Firebase();

export default firebase;
