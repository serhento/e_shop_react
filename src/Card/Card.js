import React from 'react';
import './Card.scss';
import axios from "axios";

export const Card =({productsArray, item, deleteProduct})=>{

    // const deleteItem =async (id)=>{
    //     await axios.delete(`https://e-shop-react-d0c9b.firebaseio.com/products/${id}.json`);
    // };

    return(
        <>

            {productsArray.map(num => {
                if (num.id === item.id){
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
    )
};