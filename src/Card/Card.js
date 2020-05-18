import React from 'react';
import './Card.scss';

export const Card =({state, item})=>{

    return(
        <>

            {state.map(num => {
                if (num === item.id){
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