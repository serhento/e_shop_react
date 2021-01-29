import React from 'react';
import './Card.scss';

export const Card =({price, productsArray, items, deleteProduct, setVisible})=>{

    return(
        <div className="card">
            <button onClick={()=> setVisible(false)} className="card__close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"/></svg>
            </button>

            {items.map(item=>{
                return <>
                    {productsArray.map(num => {
                        if (num.id === item.id){
                            console.log(num.id, item.id)
                            return(
                                <div key={item.id} className="card-elements">
                                    <div className="card-elements__box">
                                        <div className="card-element__name"><span aria-label="rocket" role="img">🎾</span> {item.name}</div>
                                        <div className="card-element__price">{item.price.toLocaleString()} RUB</div>
                                    </div>
                                    <button onClick={()=>deleteProduct(num.name)} className="card-element__delete" >Delete</button>
                                </div>
                            )
                        }
                        return null;
                    })}
                </>
            })}

            <div className="card-elements">
                <div className="card-element__name"><span aria-label="money" role="img">💳</span> Sum:</div>
                <div className="card-element__price-sum">{price.toLocaleString()} RUB</div>
            </div>
        </div>
    )
};