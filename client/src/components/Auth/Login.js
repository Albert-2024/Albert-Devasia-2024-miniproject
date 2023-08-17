import React,{useState} from 'react'

const Login = () => {
  const [value, setValue] = useState({
    email: '',
    password: ''
  })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
      event.preventDefault();


    }
    const handleChange = (event) => {
      email = event.target.value
      event.preventDefault();
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
              value={email}
              onChange={handleChange}
              className='form-control mt-1'

              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                placeholder='password'
                value={password}
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