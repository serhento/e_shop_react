import React from 'react';
import './Header.scss'

export const Header =({state, onClick})=>{
    return(
        <div className="header">
            <div onClick={onClick} className="header-count"><span aria-label="basket" role="img">🛒</span> {state.length}</div>
        </div>
    )
};
