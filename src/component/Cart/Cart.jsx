import './Cart.css';

import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    let total=0;
    let totalShipping=0;
    
    for(const product of cart){
        total=total+product.price;
        totalShipping=totalShipping+product.shipping;
    }
    const tax=total*7/100;
    const grandTotal=total+totalShipping+tax;
    return (
        <div className="cart">
            <h2>Order summary</h2>
            <p>Selected items:{cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping charges: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;