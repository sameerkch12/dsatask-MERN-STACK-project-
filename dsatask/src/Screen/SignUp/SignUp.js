import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepasswordChange = (e) => {
    setRepassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    if(password !== repassword) {
      alert("Password Should be same")
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('')
    setPassword('')
    setRepassword('')
    
    // We will have to load the home page with the user data
    window.location.href = '/home'
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
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
        <button type="submit" className="btn btn-primary text-align-center">Create Account</button>
      </form>
    </div>
  )
}
