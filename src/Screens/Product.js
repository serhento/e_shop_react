import React, {useContext} from 'react';
import {FirebaseContext} from "../store/firebase/firebaseContext";
import {Link} from "react-router-dom";
import './Product.scss';
// import {data} from '../assets/data';

export const Product=(props)=>{

    //console.log(props)
    const {items} = useContext(FirebaseContext);

    // console.log(items)
    // console.log(typeof props.match.params.id)

    // items.map(item=>{
    //     if (item.id === props.match.params.id) {
    //         console.log(item)
    //     }
    // })

    const product = items.find(item => item.id === Number(props.match.params.id));

    console.log(product)

    return(
        <div className="product">
            <div className="back-to-result">
                <Link to="/e_shop_react">Back to main page</Link>
            </div>

            {product &&
                <div className="product-details">
                    <div className="product-details-img">
                        <img src={product.img} alt="product"/>
                    </div>

                    <div className="product-details-info">
                        <ul>
                            <li>
                                <h4>{product.name}</h4>
                            </li>
                            {/*<li>*/}
                            {/*    {product.rating} Stars ({product.numReviews} Reviews)*/}
                            {/*</li>*/}
                            <li>
                                Brand: <Link to="#"><b>{product.brand}</b></Link>
                            </li>
                            <li>
                                Price: <b>{product.price} RUB</b>
                            </li>
                            {/*<li>*/}
                            {/*    Description:*/}
                            {/*    <div>*/}
                            {/*        {product.desc}*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>
                    </div>

                    <div className="product-details-action">
                        <ul>
                            <li>
                                Price: {product.price} RUB
                            </li>
                            <li>
                                Brand: <Link to="#"><b>{product.brand}</b></Link>
                            </li>
                            <li>
                                Status: {product.status}
                            </li>
                            <li>
                                Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            </li>
                            <li>
                                <button className="product-details-button">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            }

        </div>
    )
};