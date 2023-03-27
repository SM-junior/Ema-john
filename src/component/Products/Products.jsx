import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {

    const { img, name, price, seller, ratings, id } = props.product;
    const thisIsClickFunction = props.clickFunction;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <h5 className='price'>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() => thisIsClickFunction(props.product)} className='btn-cart'>
                Add to cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Products;