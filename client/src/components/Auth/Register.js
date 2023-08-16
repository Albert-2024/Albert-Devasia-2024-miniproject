import React,{useState} from 'react'

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {

    }
  return (
    <div>
        <h2>Register</h2>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}

        />
        <input
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <button onClick={handleRegister}>Login</button>
    </div>
  )
}

export default Register