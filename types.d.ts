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
    quantity?: number;
}
export type ProductsContext = {
    cartitems: Array<ProductFire>;
    addCartProduct: (product: ProductFire) => void;
};
export type stateReducer = {
    cartitems: Array<ProductFire>;
};

export type productReducerAction =
    | {
          type: ADD_CART;
          payload: ProductFire;
      }
    | {
          type: INCREASE_CART_QUANTITY;
          payload: ProductFire;
      };
