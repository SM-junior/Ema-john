import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    const handleAddToCart=(x)=>{
        const newCart=[...cart, x];
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="shop">
                {
                    products.map(product=><Products 
                        key={product.id}
                        product={product}
                        clickFunction={handleAddToCart}
                        ></Products>)
                }
            </div>
            <div className='order-summery'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;