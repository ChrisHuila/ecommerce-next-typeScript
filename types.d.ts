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
    tags?: string[];
}
export interface StateReducer {
    user: User | null; 
    cartitems: Array<Product>;
    cartquantity: number;
    notificationadded: boolean;
    totalprice: number;
}
export interface ProductsContext extends StateReducer {
    addCartProduct: (product: Product) => void;
    removeFromCart: (id: string) => void;
    getLocalStorage: (storage: Product[]) => void;
    getUser: (user: User) => void;
}

export type ProductReducerAction =
    | {
          type: "GET_USER";
          payload: User;
      }
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

export interface UserValidation {
    user_name?: string,
    email: string,
    password: string,
    confirm?: string
}
export interface ErrorsValidation {
    user_name?: string,
    email?: string,
    password?: string, 
    confirm?: string
}
export interface ErrorsValidationProduct {
    name?: string;
    price?: string;
    category?: string;
    information?: string;
    number_warranty?: string;
    date_warranty?: string;
    discount?: string;
    img?: string;
}
export interface ValidationProduct {
    name?: string;
    price?: string;
    category?: string;
    information?: string;
    number_warranty: string;
    date_warranty: string;
    discount?: string;
}