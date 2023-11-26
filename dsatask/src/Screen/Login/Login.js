import React, {useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    setEmail('')
    setPassword('')
    // Perform login logic here
    
    await axios
      .post('https://dsaback.onrender.com/api/login',userData)
      .then((res) => {
        console.log(res)
        localStorage.setItem("loggedIn",true)
        localStorage.setItem("email",userData.email)
        navigate('/home')
      })
      .catch((err) => {
        alert("Some error occured. Please try again later")
        console.log(err)
      })

  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <p>Don't have an account? <Link to='/signup' className='icon-link'> Sign Up</Link></p>
        <button type="submit" className="btn btn-primary text-align-center">Login</button>
      </form>
    </div>
  )
}

