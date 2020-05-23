import React from 'react';
import './Loader.scss';
import spinner from '../img/spinner.svg'

export const Loader =()=>{
    return(
        <div className="spinner">
            <img className="spinner-img" src={spinner} alt="spinner"/>
        </div>
    )
}