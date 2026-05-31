import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '../components/PhoneFrame/PhoneFrame';
import FloatingInput from '../components/FloatingInput/FloatingInput';
import Button from '../components/Button/Button';
import './Login.css';

/**
 * Login Page
 * "Signin to your PopX account" with email & password fields.
 * The Login button appears gray/disabled initially.
 * On submit, navigates to the Profile page.
 */
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Check if the form has valid input
  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate to profile on login
    navigate('/profile');
  };

  return (
    <PhoneFrame>
      <div className="login" id="login-page">
        <div className="login__content">
          {/* Header */}
          <h1 className="login__title" id="login-title">
            Signin to your
            <br />
            PopX account
          </h1>
          <p className="login__subtitle" id="login-subtitle">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          {/* Form */}
          <form className="login__form" onSubmit={handleLogin}>
            <FloatingInput
              label="Email Address"
              type="text"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="login-email"
            />

            <FloatingInput
              label="Password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="login-password"
            />

            <Button
              variant={isFormValid ? 'primary' : 'disabled'}
              type="submit"
              id="btn-login-submit"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </PhoneFrame>
  );
}

export default Login;
