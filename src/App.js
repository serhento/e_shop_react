import React, {useEffect, useState, useContext} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./Header/Header";
import {Card} from "./Card/Card";
import {FirebaseContext} from "./store/firebase/firebaseContext";
import {SideBar} from "./SideBar/SideBar";
import {Home} from "./Screens/Home";
import {Product} from "./Screens/Product";
import {LoginPage} from "./Login/LoginPage";

function App() {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    };
    const [signedName, setSignedName] = useState("Log in")
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    const [state, setState] = useState([]);
    const [userLogged, setUserLogged] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visibleSideBar, setVisibleSideBar] = useState(false);
    const [visibleLogin, setVisibleLogin] = useState(false);
    const {items, products, fetchProducts, fetchItems, loading, deleteProduct} = useContext(FirebaseContext);
    let price = 0;
    let productsArray = [];

    console.log(items);

    useEffect(()=> {
      // fetchItems();
       fetchProducts()
        // eslint-disable-next-line
    }, []);

    if (products){
        productsArray = Object.entries(products).map(([key, value]) => {
            return {name: key, id: value}
        })
    }

    items.map(item=> {
        productsArray.map(num =>{
                if (num.id === item.id){
                    price += item.price
                } return null
        })
        return null
    });

    const Login = details =>{
        console.log(details);
        if (details.email === adminUser.email && details.password === adminUser.password){
            console.log("Logged in")
            setUser({
                name: details.name,
                email: details.email
            });
            setSignedName(details.name);
            setVisibleLogin(false);
            setUserLogged(true);
        }else{
            setError("Details do not match")
        }
    };

    const Logout = () =>{
        setUser({name: "", email: ""});
        setSignedName("Log in");
        setVisibleLogin(false);
        setUserLogged(false);
    };

    return (
        <BrowserRouter>

            <div>
                {/***********Sidebar***********/}
                {visibleSideBar && <SideBar onClick={()=>setVisibleSideBar(false)}/>}

                {/***********Header***********/}
                <Header
                    userLogged={userLogged}
                    signedName={signedName}
                    setVisibleLogin={setVisibleLogin}
                    onClick={()=> setVisible(true)}
                    onPress={()=> setVisibleSideBar(true)}
                    productsArray={productsArray} state={state}
                />

                {/***********Products***********/}
                {userLogged && <div className="products">

                    <Route path="/e_shop_react" exact component={Home}/>
                    <Route path="/product/:id" component={Product}/>

                </div>}

                {!userLogged && <div className="welcome">
                    <h1>Please Log in</h1>
                    <p>Name: Your name</p>
                    <p>Email: admin@admin.com</p>
                    <p>Password: admin123</p>
                </div>}

                {/***********Cart***********/}
                {visible && <Card
                    price={price}
                    items={items}
                    setVisible={setVisible}
                    deleteProduct={deleteProduct}
                    productsArray={productsArray}
                />}

                {/***********Login*************/}
                {visibleLogin && <LoginPage Logout={Logout} user={user} Login={Login} error={error}/>}

            </div>

        </BrowserRouter>
  );
}

export default App;
