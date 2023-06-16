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
    notificationadded: boolean;
    totalprice: number;
}
export interface ProductsContext extends StateReducer {
    addCartProduct: (product: Product) => void;
    removeFromCart: (id: string) => void;
    getLocalStorage: (storage: Product[]) => void;
}

export type ProductReducerAction =
    | {
          type: "ADD_CART";
          payload: Product;
      }
    | {
          type: "REMOVE_FROM_CART";
          payload: string;
      }
    | {
          type: "TOTAL_PRICE";
      }
    | {
          type: "CART_QUANTITY";
      }
    | {
          type: "MESSAGE_ADDED";
          payload: boolean;
      }
    | {
          type: "SET_LOCALSTORAGE";
      }
    | {
        type: "GET_LOCALSTORAGE";
        payload:  Product[];
    };
