import React from 'react';
import Product from '../Product/Product';

const Products = ({ products, handleAddToCart }) => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 my-10">
            {products.map(product => <Product product={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)}
        </div>
    );
};

export default Products;