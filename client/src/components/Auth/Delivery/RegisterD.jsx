import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';


const RegisterU = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        conPass: ''
    })

    const handleChange = (e) => {
        const {name, value}= e.target;
        setValues(prev => ({ ...prev, [name]: value }))
    }

    const handleRegister = (e) => {
        e.preventDefault();
        localStorage.setItem('values', JSON.stringify(values));
        fetch('http://localhost:5000/add', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ "username": values.username, "email": values.email, "password": values.password })
        })
        .then(response => {
            if (response.ok) {
              response.json().then((data) => {
                console.log("Success")
              })
            } else {
              throw new Error('Network response is not ok')
            }
          }).then(data => {
            navigate('/login')
          })
          .catch(error => {
            console.log('fetch error:error')
          })  
      }
  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">

      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleRegister}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="form-group mt-3">
              <input
                name='username'
                type="text"
                placeholder=" Enter Name"
                value={values.username}
                className='form-control mt-1'
                onChange={handleChange}
              // (e) => setEmail(e.target.value)
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                placeholder=" Enter email"
                value={values.email}
                onChange={handleChange}
                className='form-control mt-1'
                name="email"

              />
            </div>

            <div className="form-group mt-3">
              <input
                name='password'
                type="password"
                placeholder='password'
                className='form-control mt-1'
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <input
                name='conPass'
                type="password"
                placeholder='Confirm password'
                className='form-control mt-1'
                value={values.conPass}
                onChange={handleChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type='submit' className='btn btn-default border w-100  rounded-5 text-decoration'>Register</button>
            </div>
            <p className="forgot-password text-right mt-2">
              <a href="#"> Forgot password?</a><br />
              <Link to="/login" className=' w-100 bg-light rounded-2 text-decoration'>Login</Link>
            </p>
          </div>
        </form>
      </div>

    </section>
  )
}

export default RegisterU