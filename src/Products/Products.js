import React, {useContext} from 'react';
import './Products.scss'
import {FirebaseContext} from "../store/firebase/firebaseContext";

export const Products = ({item, name, price, img, id, productsArray}) =>{

    const firebase = useContext(FirebaseContext);

    let active = false;
    let btnName = 'Добавить в корзину';

    productsArray.map(num => {
        if (num.id === item.id){
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
                <button onClick={()=> firebase.pushBtn(id)} className={btnActive}>{btnName}</button>
            </li>
        </>
    )
};