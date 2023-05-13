import React from 'react'
import { useDispatch } from 'react-redux'
import { clearUser } from '../../Redux/userSlice'
import { useNavigate } from 'react-router-dom';
function Customers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(clearUser());
    navigate("")
  };

  return (
    <div>
      Customers
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Customers
