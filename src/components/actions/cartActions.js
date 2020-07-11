import { ADD_TO_CART} from './action-types/cart-actions'

//digunakan ketika menambahkan item ke cart
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
