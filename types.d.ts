export interface ProductFire {
    name: string;
    price: string;
    image: string;
    category: string;
    date: number;
    information: string;
    warranty: { number: number; date: string };
    discount: number;
    id: string;
}

export interface Product {
    referencia: string;
    precio: string;
    marca: string;
    nombre: string;
    categoria: string;
    imagen: string;
    id: string;
    userid: string;
    lista: string;
    sistemaoperativo: string;
    color: string;
    date: number;
    tipo: string;
    garantia: string;
    lastEdited?: number;
}
export interface Categories {
    nombre: string;
    id: string;
    userid: string;
    date: number;
}
export interface ProductsContext {
    shopingcart: Array<Product>;
}

export interface productReducerAction {
    type: NEW_PURCHASE;
    payload: Array<Product>;
}
