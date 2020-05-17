import React, {useEffect, useState} from 'react';
import {store} from "./store/store";
import {Products} from "./Products/Products";

function App() {

    const [state, setState] = useState([]);

    useEffect(()=> {
        const raw = localStorage.getItem('state') || [];
        setState(JSON.parse(raw));
    }, []);

    useEffect(()=> {
        localStorage.setItem('state', JSON.stringify(state));
    }, [state]);

    const addItem =(id)=>{

        const index = state.indexOf(id);

        if (index === -1){
            setState([...state, id])
        }else {
            const newList = state.filter(item => item!== id);
            setState(newList);
        }
    };

    console.log(state.length)

    return (
        <div>
            <p>{state.length}</p>
            <ul className="products-container">
              {store.map(item => <Products addItem={()=> addItem(item.id)} key={item.id} name={item.name} price={item.price} item={item} img={item.img} id={item.id} state={state}/>)}
            </ul>
        </div>
  );
}

export default App;
