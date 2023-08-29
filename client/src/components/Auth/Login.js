import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Validation from './Loginvalidation';

const Login = () => {
  const [value, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

    const handleChange = (event) => {
      setValues(prev => ({...prev,[event.target.name]: event.target.value})
      )
    }

     const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation())

    }
  

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">

    <div className="Auth-form-container">
      <form className="Auth-form" onClick={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <input
              type="email"
              placeholder="Email"
              name='email'
              // value={errors.email}
              onChange={handleChange}
              className='form-control mt-1'

              />
            {errors.email} <span className='text-danger'>{errors.email}</span>
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                placeholder='password'
                name='password'
                // value={password}
                onChange={handleChange}
                className='form-control mt-1'
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type='submit' className='btn btn-default border w-100  rounded-5 text-decoration' onClick={handleSubmit}>Login</button>
            </div>
          </div>
         </form>
      </div>

    </section>
  )
}

export default Login