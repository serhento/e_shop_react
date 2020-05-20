import React from 'react';
import './Card.scss';

export const Card =({productsArray, item})=>{

    return(
        <>

            {productsArray.map(num => {
                if (num.id === item.id){
                    return(
                        <tr key={item.id}>
                            <td className="card-element__name"><span aria-label="rocket" role="img">🎾</span> {item.name}</td>
                            <td className="card-element__price">{item.price.toLocaleString()} RUB</td>
                        </tr>
                    )
                }
                return null;
            })}

        </>
    )
};