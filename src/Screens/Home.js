import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {Products} from "../Products/Products";
import {FirebaseContext} from "../store/firebase/firebaseContext";


export const Home=(props)=>{

    let productsArray = [];
    let price = 0;
    const {items, products, fetchProducts, fetchItems, loading, deleteProduct} = useContext(FirebaseContext);

    const [state, setState] = useState([]);

    if (products){
        productsArray = Object.entries(products).map(([key, value]) => {
            return {name: key, id: value}
        })
    }

    const addItem =(id)=>{

        const index = state.indexOf(id);

        if (index === -1){
            setState([...state, id])
        }else {
            const newList = state.filter(item => item!== id);
            setState(newList);
        }
    };

    items.map(item=> {
        productsArray.map(num =>{
            if (num.id === item.id){
                price += item.price
            } return null
        })
        return null
    });

    return(
        <ul className="products-container">
            {items.map(item => <Products addItem={()=> addItem(item.id)} key={item.id} name={item.name} price={item.price} item={item} img={item.img} id={item.id} productsArray={productsArray}/>)}
        </ul>
    )
};


{/*<ul className="products">*/}

{/*    {*/}
{/*        data.products.map(product => (*/}
{/*                <li>*/}
{/*                    <div className="product">*/}

{/*                        <Link to={`/product/${product.id}`}>*/}
{/*                            <img className="product-img" src={require('../assets/img/d1.jpg').default} alt="product"/>*/}
{/*                        </Link>*/}
{/*                        <div className="product-name">*/}
{/*                            <Link to={`/product/${product.id}`}>{product.name}</Link>*/}
{/*                        </div>*/}
{/*                        <div className="product-brand">{product.brand}</div>*/}
{/*                        <div className="product-price">${product.price}</div>*/}
{/*                        <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>*/}
{/*                    </div>*/}
{/*                </li>*/}
{/*            )*/}
{/*        )*/}
{/*    }*/}

{/*</ul>*/}