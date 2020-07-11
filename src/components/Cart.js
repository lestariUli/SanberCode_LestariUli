import React, { Component } from 'react';
import { connect } from 'react-redux'
class Cart extends Component{

    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Harga: {item.price}$</b></p> 
                                        <p>
                                            <b>Jumlah: {item.quantity}</b> 
                                        </p>
                                        
                                        <button className="waves-effect waves-light btn red remove">Hapus?</button>
                                    </div>
                                    
                               </li>                        
                    )
                })
            ):

             (
                <p className="empty-cart">Belum ada Pesanan dong, Skuyy Order</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Daftar Pesanan Anda</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>  
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)