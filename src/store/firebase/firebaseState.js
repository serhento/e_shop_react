import React, {useReducer} from 'react';
import axios from 'axios';

import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";

export const FirebaseState =({children}) =>{

    const initialState = {
        items: [],
        products: [],
        loading: false
    };

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader =()=> dispatch({type: "SHOW_LOADER"});

    const fetchItems = async ()=>{
        showLoader();
        const res = await axios.get("https://e-shop-react-d0c9b.firebaseio.com/items.json");
        const payload = res.data;
        dispatch({type: "FETCH_ITEMS", payload})
    };

    const fetchProducts = async ()=>{
        showLoader()
        const res = await axios.get("https://e-shop-react-d0c9b.firebaseio.com/products.json");
        const payload = res.data;
        dispatch({type: "FETCH_PRODUCTS", payload})
    };

    const pushBtn = async (id)=>{

        const res = await axios.get("https://e-shop-react-d0c9b.firebaseio.com/products.json");
        if (res.data){
            const firebaseIds = Object.values(res.data)

            const index = firebaseIds.indexOf(id);

            if (index === -1){
                addProduct(id)
            }else {
                firebaseIds.map(num=> {
                    if (id === num){
                        Object.entries(res.data).map(([key, value]) => {
                            if (value === num){
                                deleteProduct(key)
                            }
                        })
                    }else {

                    }
                })

            }
        }else {
            addProduct(id)
        }
    };



    const addProduct =async (id)=>{
        //showLoader()
        await axios.post("https://e-shop-react-d0c9b.firebaseio.com/products.json", id);
        fetchProducts()

    }

    const deleteProduct =async (id)=>{
        await axios.delete(`https://e-shop-react-d0c9b.firebaseio.com/products/${id}.json`);
        fetchProducts()
    };

    return(
        <FirebaseContext.Provider value={{
            showLoader, loading: state.loading, pushBtn, fetchItems, items: state.items, fetchProducts, products: state.products
        }}>

            {children}

        </FirebaseContext.Provider>
    )
};