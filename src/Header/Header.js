import React from 'react';
import './Header.scss'

export const Header =({onClick, productsArray, onPress})=>{
    return(
        <div className="header">
            <div className="header-brand">
                <button onClick={onPress}>
                    &#9776;
                </button>
                <a href="index.html">Tennis Shop</a>
            </div>
            <div onClick={onClick} className="header-count">
                <span aria-label="basket" role="img">🛒</span>
                {productsArray.length}
            </div>
        </div>
    )
};
