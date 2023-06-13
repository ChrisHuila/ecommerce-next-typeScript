export interface Product {
    name: string;
    price: string;
    image: string;
    category: string;
    date: number;
    information: string;
    warranty: { number: number; date: string };
    discount: number;
    id: string;
    quantity?: number;
}
export interface StateReducer {
    cartitems: Array<Product>;
    cartquantity: number;
}
export interface ProductsContext extends StateReducer {
    addCartProduct: (product: Product) => void;
}

export type ProductReducerAction =
    | {
          type: ADD_CART;
          payload: Product;
      }
    | {
          type: CART_QUANTITY;
          payload: Product;
      };
