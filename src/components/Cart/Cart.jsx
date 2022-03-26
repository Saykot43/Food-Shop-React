import React from 'react';
import './Cart.css'
import { TiDeleteOutline } from 'react-icons/ti'

const Cart = ( {cart , reset, handleChoice} ) => {
    let quantity =0;
    for(const product of cart){
        quantity = quantity+product.quantity;
    }
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            {/* <p>Selected Items: {quantity}</p> */}
            <div className='cart-detail'>
                {
                    cart.map(item=>(
                        (
                            <div className='flex' key={cart.id}>
                                <div className='flex1'>
                                <img src={item.img} alt="" />
                                <p style={{paddingLeft: 10}}>{item.name}</p>
                                </div>
                                <TiDeleteOutline className='del-btn'/>
                            </div>
                        )
                    ))
                }
            </div>
            <div className="btn-reset">
                <button onClick={()=>handleChoice(cart)} className='choice'>Choice one</button>
                <button onClick={()=>reset()} className='reset'>Reset</button>
            </div>
        </div>
    );
};

export default Cart;