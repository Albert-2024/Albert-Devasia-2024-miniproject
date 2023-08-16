import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {

  }
  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">

      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="form-group mt-3">
              <input
                type="email"
                placeholder=" Enter email"
                value={email}
                className='form-control mt-1'
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>

            <div className="form-group mt-3">
              <input
                type="password"
                placeholder='password'
                className='form-control mt-1'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button onClick={handleRegister}>Login</button>
            </div>
            <p className="forgot-password text-right mt-2">
              <a href="#"> Forgot password?</a>
            </p>
          </div>
        </form>
      </div>

    </section>
  )
}

export default Register