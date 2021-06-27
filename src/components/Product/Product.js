import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    console.log(props.product);
    return (
        
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p>by: {seller}</p>
                <p>${price}</p>
                <p>Only {stock} left in stock</p>
                <button 
                className="main-button"
                onClick={()=>props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>

        </div>
    );
};

export default Product;