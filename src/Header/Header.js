import React from 'react';
import './Header.scss'

export const Header =({onClick, productsArray})=>{
    return(
        <div className="header">
            <div onClick={onClick} className="header-count"><span aria-label="basket" role="img">🛒</span> {productsArray.length}</div>
        </div>
    )
};
