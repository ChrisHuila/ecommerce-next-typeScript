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

export interface ProductsContext {
    shopingcart: Array<Product>;
}

export interface productReducerAction {
    type: NEW_PURCHASE;
    payload: Array<Product>;
}
