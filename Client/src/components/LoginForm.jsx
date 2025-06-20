import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user, registered } = useSelector((state) => state.auth);

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login({ email: formData.email, password: formData.password }));
    } else {
      dispatch(register(formData));
    }
  };

  useEffect(() => {
    if (user) navigate('/home');
  }, [user, navigate]);

  useEffect(() => {
    if (registered) {
      setIsLogin(true);
      setFormData({ username: '', email: '', password: '' });
    }
  }, [registered]);

  return (
    <div className="login-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        )}
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer' }}>
        {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
      </p>
      <div className="google">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log("Google User:", decoded);

            localStorage.setItem('user', JSON.stringify(decoded));
            localStorage.setItem('username', decoded.name);
            localStorage.setItem('email', decoded.email);

            navigate('/home');
          }}
          onError={() => {
            console.log('Google Login Failed');
          }}
        />
      </div>
    </div>
  );
};

export default Login;