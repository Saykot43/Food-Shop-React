import React from 'react';
import './Cart.css'

const Cart = ( {cart} ) => {
    let quantity =0;
    let name =[];
    let img = [];
    for(const product of cart){
        quantity = quantity+product.quantity;
        name = product.name;
        img = product.img;
    }
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <div className='cart-detail'>
                <img src={img} alt=""/>
                <p style={{paddingLeft: 10}}>{name}</p>
                
            </div>
        </div>
    );
};

export default Cart;