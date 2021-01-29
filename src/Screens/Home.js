import React, {useContext, useEffect, useState} from 'react';
import {Products} from "../Products/Products";
import {FirebaseContext} from "../store/firebase/firebaseContext";
import {Loader} from "../Loader/Loader";


export const Home=()=>{

    let productsArray = [];
    let price = 0;
    const {items, products, loading, fetchItems} = useContext(FirebaseContext);

    const [state, setState] = useState([]);

    if (products){
        productsArray = Object.entries(products).map(([key, value]) => {
            return {name: key, id: value}
        })
    }

    useEffect(()=> {
        fetchItems();
        // eslint-disable-next-line
    }, []);

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
            {loading ?
                <Loader/> :
                items.map(item => <Products addItem={()=> addItem(item.id)} key={item.id} name={item.name} price={item.price} item={item} img={item.img} id={item.id} productsArray={productsArray}
                />)
            }
        </ul>
    )
};