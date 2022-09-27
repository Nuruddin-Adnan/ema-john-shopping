import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div>
            <Header></Header>
            <div className="container mx-auto">
                <div className="flex">
                    <div className='product-container'>
                        <div className='grid lg:grid-cols-3 grid-cols-2 gap-6 my-10'>
                            {products.map(product => <Product product={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)}
                        </div>
                    </div>
                    <div className="shrink-0 ml-6 cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;