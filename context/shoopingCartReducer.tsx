import { productReducerAction, ProductsContext } from "@/types"
import { NEW_PURCHASE } from "@/types/index"

export default (state: ProductsContext, action: productReducerAction) => {
    switch(action.type){
        case NEW_PURCHASE:
            return{
                ...state,
                shopingcart: action.payload
            }
        default:
            return state
    }
}