import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div className="cart bg-orange-200 border border-current p-4 min-h-screen">
            <h2 className='font-semibold text-xl'>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Shipping Charge: $5</p>
            <button className='bg-rose-500 p-5 border rounded-md w-full'>Delete to cart</button>
        </div>
    );
};

export default Cart;