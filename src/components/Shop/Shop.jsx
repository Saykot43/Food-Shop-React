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

// Add product function
    const handleAddToCart = (selectedProduct) =>{
            const duplicateProduct = cart.find(p => p === selectedProduct)
            const cartLength = [...cart, selectedProduct].length;
            if (duplicateProduct) {
                alert(`${duplicateProduct.name} already in the cart!\nYou can not add duplicate product !!!`)
            }
    
            else if (cartLength > 4) {
                alert("You can not add more than 4 items in the cart");
            }
    
            else {
                const cartItems = [...cart, selectedProduct]
                setCart(cartItems);
            }
        }

   // Product reset function
        const reset =()=>{
            setCart([]);
        }
   // Choice Product
        const handleChoice =(selectCart)=>{
            const totalCartItems = selectCart.length;
            if (totalCartItems < 2) {
                alert("Please add minimum 2 items to choose 1 randomly")
            }
            else {
                const index = Math.floor(Math.random() * totalCartItems);
                const lucky = selectCart[index]
                setCart([lucky]);
            }
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