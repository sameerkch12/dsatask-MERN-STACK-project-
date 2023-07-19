import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate()
  const [username,setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepasswordChange = (e) => {
    setRepassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform login logic here
    if(password !== repassword) {
      alert("Password Should be same")
      return;
    }

    const userData = {
      name: username,
      email: email,
      password: password,
      confirmPassword: repassword
    }

    setEmail('')
    setUsername('')
    setPassword('')
    setRepassword('')
    
    // We will have to load the home page with the user data
    await axios
      .post('http://localhost:5000/api/signup',userData)
      .then((res) => {
        console.log(res)
        localStorage.setItem("loggedIn",true)
        localStorage.setItem("email",userData.email)
        navigate('/home')
      })
      .catch((err) => {
        alert("Some error occured")
        console.log(err)
      })
    

      
  };

  return (
    <div className="login-container">
      <form >
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="repassword"
            className="form-control"
            value={repassword}
            onChange={handleRepasswordChange}
            required
          />
        </div>
        <p>Already have an account? <Link to='/login'>Log in</Link></p>
        <button onClick={handleSubmit} className="btn btn-primary text-align-center">Create Account</button>
      </form>
    </div>
  )
}
