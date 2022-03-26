import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const handleAddToCart = (selectedProduct) =>{
            // console.log(selectedProduct);
            let newCart = [];
            const exists = cart.find(product => product.id === selectedProduct.id);
            if(!exists){
                newCart = [...cart, selectedProduct];
            }
            else{
                const rest = cart.filter(product => product.id !== selectedProduct.id);
                newCart = [...rest, exists];
            }
            
            // const newCart =[...cart, selectedProduct];
            
            setCart(newCart);
        }

        const reset =()=>{
            setCart([]);
        }

        const handleChoice =()=>{
            const choice = cart[Math.floor(Math.random()*cart.length)];
            setCart([choice]);
        };

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product= {product}
                        handleAddToCart ={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    reset={reset}
                    handleChoice={handleChoice}
                />
            </div>
        </div>
    );
};

export default Shop;