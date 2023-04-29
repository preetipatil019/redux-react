import React from 'react';
import { useDispatch } from "react-redux";
import {login,logout} from "../features/user"

const Login = () => {
    const dispatch = useDispatch();
  return (
    <div>
          <button onClick={() => dispatch(login({ name: "preeti", age: 22, email: "ppp@gmail.com" }))}>Login</button>
          <button onClick={()=>dispatch(logout())}>LogOut</button>
    </div>
  );
}

export default Login;
