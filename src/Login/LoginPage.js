import React, {useState} from 'react';
import './LoginPage.scss';

export const LoginPage =({user, error, Login, Logout})=>{

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    };

    return(
        <form className="form" onSubmit={submitHandler}>
            {(user.email !== "") ? (
                <div>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <div className="form-inner">
                    <h2>Login</h2>
                    {(error !== "") ? (<div className="form-inner-error">{error}</div>) : ""}
                    <div className="form-inner-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" onChange={e=>setDetails({...details, name: e.target.value})} value={details.name}/>
                    </div>
                    <div className="form-inner-group">
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" id="email" onChange={e=>setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                    <div className="form-inner-group">
                        <label htmlFor="password">Password: </label>
                        <input type="text" name="password" id="password" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input className="form-inner-btn" type="submit" value="Login"/>
                </div>
            )}
        </form>
    )
};