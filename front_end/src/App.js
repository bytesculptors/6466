import './App.css';
import React, {useEffect} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Admin from './Components/Admin/Admin';
import Login from './Components/Login_Signup/Login';
import Signup from './Components/Login_Signup/Signup';
import Home from './Components/Home/Home';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {clearUser} from "./Redux/userSlice";

function App() {
  const user = useSelector(state => state.user);
  console.log("user", user);

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={user.access === 'admin' ? <Admin /> : <Home />}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/signup' element = {<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
