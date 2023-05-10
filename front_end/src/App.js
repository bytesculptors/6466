import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Admin from './Components/Admin/Admin';
import Login from './Components/Login_Signup/Login';
import Signup from './Components/Login_Signup/Signup';
import Home from './Components/Home/Home';
import { useSelector } from 'react-redux';
import { CarDataProvider } from './Components/data/CarDataContext';
import CarsData from './Components/data/CarsData';
import { UserDataProvider } from './Components/data/UserContext';
import UserData from './Components/data/UserData';
import { BookingDataProvider } from './Components/data/BookingContext';
import BookingData from './Components/data/BookingData';


function App() {
  // const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  

  // useEffect(() => {
  //   window.addEventListener('beforeunload', () => {
  //     const entries = performance.getEntriesByType('navigation');
  //     const isReloading = entries.length && entries[0].type === 'reload';
  //     console.log(isReloading)
  //     if (!isReloading) {
  //       // Xử lý khi trang tắt đi
  //       window.localStorage.clear();
  //       dispatch(clearUser());
  //     }
  //   });
  // }, [dispatch]);

  return (
    <CarDataProvider>
      <UserDataProvider>
        <BookingDataProvider>
          <CarsData />
          <UserData />
          <BookingData/>
          <BrowserRouter>
            <Routes>
              <Route path='*' element={user.access === 'admin' ? <Admin /> : <Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
            </Routes>
          </BrowserRouter>
        </BookingDataProvider>
      </UserDataProvider>
    </CarDataProvider>
  );
}


export default App;
