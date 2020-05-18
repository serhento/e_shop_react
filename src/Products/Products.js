import React from 'react';
import './Products.scss'

export const Products = ({item, addItem, name, price, img, id, state}) =>{

    let active = false;
    let btnName = 'Добавить в корзину';

    state.map(num => {
        if (num === item.id){
            active = true;
            btnName = 'Удалить из корзины';
        }
        return null;
    });

    const btnActive = 'products-element__btn ' + (active ? 'products-element__btn_active' : '');

    return (
        <>
            <li className="products-element">
                <span className="products-element__name">{name}</span>
                <img className="products-element__img" alt="img"  src={img}/>
                <span className="products-element__price">{price.toLocaleString()} RUB</span>
                <button onClick={()=> addItem(id)} className={btnActive}>{btnName}</button>
            </li>
        </>
    )
};