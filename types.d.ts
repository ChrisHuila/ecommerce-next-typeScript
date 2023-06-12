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
          type: INCREASE_CART_QUANTITY;
          payload: Product;
      };
