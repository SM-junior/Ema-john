import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="shop">
                {
                    products.map(product=><Products 
                        key={product.id}
                        product={product}></Products>)
                }
            </div>
            <div className="order-summery">
                <h2>de</h2>
            </div>
        </div>
    );
};

export default Shop;