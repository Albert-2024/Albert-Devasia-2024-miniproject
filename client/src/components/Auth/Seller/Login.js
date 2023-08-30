import React,{useState} from 'react'
import {Link, Navigate} from 'react-router-dom';
import Validation from '../Loginvalidation';

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
      // setErrors(Validation())
      localStorage.setItem('values', JSON.stringify(value));
       /*  fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify({"email": value.email,"password":value.password})
        })
        .then(response => {
          if(response.ok){
            response.json().then((data)=>{
               console.log('login success');
            });
         }
            else{
              throw new Error('Network response is not ok')
            }
          }).catch(error => {
            console.error(error)}) */
         /*  }).then(data => {
            localStorage.setItem('token', data.token);
            // navigate('/dashboard');
          }) */
        
          /* const token = response.json();
          localStorage.setItem('token', token); */


    }
  

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">

    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <input
              type="email"
              placeholder="Email"
              name='email'
              value={value.email}
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