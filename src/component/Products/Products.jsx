import React from 'react';
import './Products.css';

const Products = (props) => {
    const {img,name,price,seller,ratings}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <h5 className='price'>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Products;