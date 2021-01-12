import React, {useEffect, useState, useContext} from 'react';
import {Products} from "./Products/Products";
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Header} from "./Header/Header";
import {Card} from "./Card/Card";
import {FirebaseContext} from "./store/firebase/firebaseContext";
import {Loader} from "./Loader/Loader";
import {SideBar} from "./SideBar/SideBar";
import {Home} from "./Screens/Home";
import {Product} from "./Screens/Product";

function App() {

    const [state, setState] = useState([]);
    const [visible, setVisible] = useState(false);
    const [visibleSideBar, setVisibleSideBar] = useState(false);
    const {items, products, fetchProducts, fetchItems, loading, deleteProduct} = useContext(FirebaseContext);
    let price = 0;
    let productsArray = [];

    console.log(items)

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

    // const addItem =(id)=>{
    //
    //     const index = state.indexOf(id);
    //
    //     if (index === -1){
    //         setState([...state, id])
    //     }else {
    //         const newList = state.filter(item => item!== id);
    //         setState(newList);
    //     }
    // };

    items.map(item=> {
        productsArray.map(num =>{
                if (num.id === item.id){
                    price += item.price
                } return null
        })
        return null
    });

    return (
        <BrowserRouter>

            <div>
                {/***********Sidebar***********/}
                {visibleSideBar && <div className="sidebar">
                    <SideBar onClick={()=>setVisibleSideBar(false)}/>
                </div>}

                {/***********Header***********/}
                <Header onClick={()=> setVisible(true)}  onPress={()=> setVisibleSideBar(true)} productsArray={productsArray} state={state}/>

                {/***********Loader***********/}
                {loading ? <Loader/> : null}


                {/***********Products***********/}
                <div className="products">

                    <Route path="/e_shop_react" exact component={Home}/>
                    <Route path="/product/:id" component={Product}/>

                    {/*<Home/>*/}
                    {/*<ul className="products-container">*/}
                    {/*    {items.map(item => <Products addItem={()=> addItem(item.id)} key={item.id} name={item.name} price={item.price} item={item} img={item.img} id={item.id} productsArray={productsArray}/>)}*/}
                    {/*</ul>*/}
                </div>

                {/***********Cart***********/}
                {visible && <div className="card">
                    <button onClick={()=> setVisible(false)} className="card__close">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"/></svg>
                    </button>
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

        </BrowserRouter>
  );
}

export default App;
