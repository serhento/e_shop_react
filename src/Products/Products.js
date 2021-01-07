import React, {useContext} from 'react';
import './Products.scss'
import {FirebaseContext} from "../store/firebase/firebaseContext";
import {Link} from "react-router-dom";

export const Products = ({item, name, price, img, id, productsArray}) =>{

    const firebase = useContext(FirebaseContext);

    let active = false;
    let btnName = 'Add to cart';

    productsArray.map(num => {
        if (num.id === item.id){
            active = true;
            btnName = 'Delete from cart';
        }
        return null;
    });

    const btnActive = 'products-element__btn ' + (active ? 'products-element__btn_active' : '');

    return (
        <>
            <li className="products-element">
                <Link className="products-element__name" to={`/product/${id}`}>
                    <span className="products-element__name">{name}</span>
                </Link>
                <Link className="products-element__img" to={`/product/${id}`}>
                    <img className="products-element__img" alt="img"  src={img}/>
                </Link>
                <span className="products-element__price">{price.toLocaleString()} RUB</span>
                <button onClick={()=> firebase.pushBtn(id)} className={btnActive}>{btnName}</button>
            </li>
        </>
    )
};