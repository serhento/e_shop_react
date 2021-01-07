import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss'

export const Header =({onClick, productsArray, onPress})=>{
    return(
        <div className="header">
            <div className="header-brand">
                <button onClick={onPress}>
                    &#9776;
                </button>
                <Link to="/e_shop_react">Tennis Shop</Link>
            </div>
            <div onClick={onClick} className="header-count">
                <span aria-label="basket" role="img">🛒</span>
                {productsArray.length}
            </div>
        </div>
    )
};
