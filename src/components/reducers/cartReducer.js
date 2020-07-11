import Pohul from '../../images/pohul.jpg';
import Saksang from '../../images/saksang.jpg';
import Napinadar from '../../images/napinadar.jpg';
import  BPK from '../../images/bpk.jpg';
import IkanMAs from '../../images/ikanmas.jpg';
import BikaAmbon from '../../images/bikaambon.jpg';
import { ADD_TO_CART} from '../actions/action-types/cart-actions';

const initState = {
    items : [
        {id: 1, title: 'Pohul-Pohul', desc: "Kue pohulpohul merupakan kudapan khas tradisional Batak dari Tapanuli, Sumatera Utara. Bentuknya seperti kepalan jari tangan.", price: 30000, img: Pohul},
        {id: 2, title: 'Saksang', desc: "Kue pohulpohul merupakan kudapan khas tradisional Batak dari Tapanuli, Sumatera Utara. Bentuknya seperti kepalan jari tangan.", price: 40000, img: Saksang},
        {id: 3, title: 'Napinadar', desc: "Kue pohulpohul merupakan kudapan khas tradisional Batak dari Tapanuli, Sumatera Utara. Bentuknya seperti kepalan jari tangan.", price: 60000, img: Napinadar},
        {id: 4, title: 'BPK', desc: "Kue pohulpohul merupakan kudapan khas tradisional Batak dari Tapanuli, Sumatera Utara. Bentuknya seperti kepalan jari tangan.", price: 70000, img: BPK},
        {id: 5, title: 'Ikan Mas Naniarsik', desc: "Kue pohulpohul merupakan kudapan khas tradisional Batak dari Tapanuli, Sumatera Utara. Bentuknya seperti kepalan jari tangan.", price: 30000, img: IkanMAs},
        {id: 6, title: 'Bika Ambon', desc: "Kue pohulpohul merupakan kudapan khas tradisional Batak dari Tapanuli, Sumatera Utara. Bentuknya seperti kepalan jari tangan.", price: 50000, img: BikaAmbon}
    ]
,
addedItems:[],
total: 0
}

const cartReducer= (state = initState,action)=>{
    
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                };
      }
       else{
          addedItem.quantity = 1;
          //menghitungg totalll produks
          let newTotal = state.total + addedItem.price;
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          };
          
      }
}
else{
    return state;

}
};
    

export default cartReducer;