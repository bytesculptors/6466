import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Admin from './Components/Home/Admin';
import Login from './Components/Login_Signup/Login';
import Signup from './Components/Login_Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Admin/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/signup' element = {<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
