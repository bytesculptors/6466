import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Admin() {
  const user = useSelector(state => state.user);
  console.log("user",user);
  return (
    <>Admin</>
    // <Routes>
    //   <Route path='/' element = {<Admin props = "1111"/>}></Route>
    // </Routes>
  )
}

export default Admin
