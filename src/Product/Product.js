import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller } = product
    return (
        <div className="product-card border border-slate-200 rounded-md relative pb-10">
            <div className="p-2">
                <img src={img} alt="product thumbnail" />
                <h3 className='text-xl capitalize pt-4 pb-2'>{name.toLowerCase()}</h3>
                <p className='text-lg'>Price: <strong>{price}</strong></p>
                <p className='my-5'>Manufacturer: {seller}</p>
            </div>
            <button className='border-t w-full absolute bottom-0 p-3 bg-orange-200 hover:bg-orange-300 active:bg-orange-400' onClick={() => handleAddToCart(product)}>Add to Cart <FontAwesomeIcon icon={faCartPlus} /> </button>
        </div>
    );
};

export default Product;