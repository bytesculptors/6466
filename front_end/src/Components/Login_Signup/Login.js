import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'

function Login() {
    const [values, setValues] = useState({
        userName: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState([])
    const [backendError, setBackendError] = useState([])

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if (err.userName === "" && err.password === "") {
            axios.post('http://localhost:8082/login', values)
                .then(res => {
                    console.log(res);
                    if (res.data.errors) {
                        setBackendError(res.data.errors);
                    } else {
                        setBackendError([]);
                        if (res.data === "Success") {
                            navigate('/home');
                        } else {
                            alert("No record existed");
                        }
                    }
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign In</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='userName'><strong>userName </strong></label>
                        <input type='userName' placeholder='Enter your userName' name='userName'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.userName && <span className='text-danger'>{errors.userName}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" ><strong>Password </strong></label>
                        <input type="password" placeholder="Enter password" name='password'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    <button type='submit' className=' btn btn-success w-100 rounded-0'>Log in</button>
                    <p>You are agree to our terms and policies</p>
                    <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login
