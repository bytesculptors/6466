import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Styles/Setting.css'
import axios from 'axios';

function Setting() {
  const userData = useSelector(state => state.user);
  console.log("user", userData);
  const [user, setUser] = useState( {
    user_name: userData.user_name,
    pass_word: userData.pass_word,
    user_email: userData.user_email,
    full_name: userData.full_name,
    citizenID: userData.citizenID,
    phone_number: userData.phone_number,
    user_images: userData.user_images,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8082/profile', user)
      .then(res => {
        console.log(res);
        window.location.reload()
      })
      .catch(err => console.log(err));
    console.log(user); 
  };

  return (
    <div className='profile_data'>
      <form onSubmit={handleSubmit}>
      <label htmlFor="user_name">Tên người dùng:</label>
      <input type="text" id="user_name" name="user_name" value={user.user_name} onChange={handleInputChange} /><br /><br />

      <label htmlFor="pass_word">Mật khẩu:</label>
      <input type="password" id="pass_word" name="pass_word" value={user.pass_word} onChange={handleInputChange} /><br /><br />

      <label htmlFor="user_email">Email:</label>
      <input type="email" id="user_email" name="user_email" value={user.user_email} onChange={handleInputChange} /><br /><br />

      <label htmlFor="full_name">Họ và tên:</label>
      <input type="text" id="full_name" name="full_name" value={user.full_name} onChange={handleInputChange} /><br /><br />

      <label htmlFor="citizenID">Số CMND:</label>
      <input type="text" id="citizenID" name="citizenID" value={user.citizenID} onChange={handleInputChange} /><br /><br />

      <label htmlFor="phone_number">Số điện thoại:</label>
      <input type="text" id="phone_number" name="phone_number" value={user.phone_number} onChange={handleInputChange} /><br /><br />

      <input type="submit" value="Cập nhật" />
    </form>
    </div>
  )
}

export default Setting
