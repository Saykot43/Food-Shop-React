import React from 'react';
import './Product.css'
import { BsCartFill } from 'react-icons/bs'

const Product = ({product, handleAddToCart}) => {
    const {name, img, price, id} =product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p><small>Price: {price}</small></p>
            </div>
            <button className='btn-cart' onClick={()=>handleAddToCart(product)}>
                <div className="btn-text">
                    <p className='btn-text'>Add to cart <BsCartFill className='icon'/></p>
                </div>
            </button>
        </div>
    );
};

export default Product;