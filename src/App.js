import React, {useEffect, useState, useContext} from 'react';
import {Products} from "./Products/Products";
import {Header} from "./Header/Header";
import {Card} from "./Card/Card";
import {FirebaseContext} from "./store/firebase/firebaseContext";
import {Loader} from "./Loader/Loader";

function App() {

    const [state, setState] = useState([]);
    const [visible, setVisible] = useState(false);
    const {items, products, fetchProducts, fetchItems, loading, deleteProduct} = useContext(FirebaseContext);
    let price = 0;
    let productsArray = [];

    useEffect(()=> {
       fetchItems();
       fetchProducts()
        // eslint-disable-next-line
    }, []);

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

    return (
        <div>
            <Header onClick={()=> setVisible(true)} productsArray={productsArray} state={state}/>

            {loading ? <Loader/> : null}

            <ul className="products-container">
                {items.map(item => <Products addItem={()=> addItem(item.id)} key={item.id} name={item.name} price={item.price} item={item} img={item.img} id={item.id} productsArray={productsArray}/>)}
            </ul>

            {visible && <div className="card">
                <div onClick={()=> setVisible(false)} className="card__close"></div>
                <div>
                    <div>
                    {items.map(item => <Card deleteProduct={deleteProduct} key={item.id} productsArray={productsArray} item={item}/>)}
                    <div className="card-elements">
                        <div className="card-element__name"><span aria-label="money" role="img">💳</span> Sum:</div>
                        <div className="card-element__price-sum">{price.toLocaleString()} RUB</div>
                    </div>
                    </div>
                </div>
            </div>
            }

        </div>
  );
}

export default App;
