import React, { useState } from 'react';
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator';
import './SignUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform sign-up logic here
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    // Calculate password strength
    let strength = 0;
    if (passwordValue.match(/[a-z]/)) {
      strength += 1;
    }
    if (passwordValue.match(/[A-Z]/)) {
      strength += 1;
    }
    if (passwordValue.match(/[0-9]/)) {
      strength += 1;
    }
    if (passwordValue.match(/[!@#$%^&*()]/)) {
      strength += 1;
    }
    if (passwordValue.length >= 8) {
      strength += 1;
    }
    if (!/(.)\1\1/.test(passwordValue)) {
      strength += 1;
    }
    setPasswordStrength(strength);
  };

  return (
    <di className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <PasswordStrengthIndicator strength={passwordStrength} />
        <br />
        <button type="submit">Sign Up</button>
        <button>
            <Link className='Link' to='/' >Login</Link>
        </button>
      </form>
    </di>
  );
};

export default SignUp;
