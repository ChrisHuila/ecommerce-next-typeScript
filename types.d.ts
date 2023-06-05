
export interface Product {
    referencia: string
    precio: string
    marca: string
    nombre: string
    categoria: string
    imagen: string
    id: string
    userid: string
    lista: string
    sistemaoperativo: string
    color: string
    date: number
    tipo: string
    garantia: string
    lastEdited?: number
}
export interface Categories {
    nombre: string
    id: string
    userid: string
    date: number
}
export interface ProductsContext {
    firebase: Firebase,
    shopingcart: Array<Product>
}

export interface productReducerAction {
    type: NEW_PURCHASE,
    payload: Array<Product>,
}