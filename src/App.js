import React, {useEffect, useState} from 'react';
import {store} from "./store/store";
import {Products} from "./Products/Products";
import {Header} from "./Header/Header";
import {Card} from "./Card/Card";

function App() {

    const [state, setState] = useState([]);
    const [visible, setVisible] = useState(false)
    let price = 0;

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

    store.map(item=> {
        state.map(num =>{
            if (num === item.id){
                price += item.price
            } return null
        })
        return null
    });

    return (
        <div>
            <Header onClick={()=> setVisible(true)} state={state}/>

            <ul className="products-container">
              {store.map(item => <Products addItem={()=> addItem(item.id)} key={item.id} name={item.name} price={item.price} item={item} img={item.img} id={item.id} state={state}/>)}
            </ul>

            {visible && <div className="card">
                            <div onClick={()=> setVisible(false)} className="card__close"></div>
                                <table>
                                    <tbody>
                                    {store.map(item => <Card key={item.id} state={state} item={item}/>)}
                                    <tr>
                                        <td className="card-element__name"><span aria-label="money" role="img">💳</span> Сумма:</td>
                                        <td className="card-element__price">{price.toLocaleString()} RUB</td>
                                    </tr>
                                    </tbody>
                                </table>
                        </div>
            }
        </div>
  );
}

export default App;
