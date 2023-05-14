import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookingContext } from '../../data/BookingContext'
import './Styles/Setting.css'
import axios from 'axios';
import { updateUser } from '../../../Redux/userSlice';

function ChangePassword() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);
    console.log("user", userData);

    const [password, setPassword] = useState({
        old_password: '',
        new_password: '',
        confirm_password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPassword({ ...password, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { old_password, new_password, confirm_password } = password;
        if (old_password !== userData.pass_word) {
            setErrorMessage('Mật khẩu cũ không chính xác');
            return;
        }
        if (new_password !== confirm_password) {
            setErrorMessage('Mật khẩu mới và xác nhận mật khẩu không khớp');
            return;
        }
        const updatedUser = {
            ...userData,
            pass_word: new_password
        }
        axios.post('http://localhost:8082/profile', updatedUser)
            .then(res => {
                console.log(res);
                dispatch(updateUser(updatedUser));
                window.location.reload();
                alert('Thay đổi mật khẩu thành công');
            })
            .catch(err => console.log(err));
        console.log(updatedUser);
    };

    return (
        <div className='change_password'>
            <form onSubmit={handleSubmit} className='user_info1'>
                <div className='label'><label htmlFor="old_password">Nhập mật khẩu cũ:</label></div>
                <input className='input' type="password" id="old_password" name="old_password" value={password.old_password} onChange={handleInputChange} /><br /><br />
                <div className='label'><label htmlFor="new_password">Nhập mật khẩu mới:</label></div>
                <input className='input' type="password" id="new_password" name="new_password" value={password.new_password} onChange={handleInputChange} /><br /><br />

                <div className='label'><label htmlFor="confirm_password">Nhập lại mật khẩu mới:</label></div>
                <input className='input' type="password" id="confirm_password" name="confirm_password" value={password.confirm_password} onChange={handleInputChange} /><br /><br />

                {errorMessage && <div className='error_message'>{errorMessage}</div>}

                <input className='submit_buttom' type="submit" value="Thay đổi mật khẩu" />
            </form>
        </div>
    )
}

export default ChangePassword