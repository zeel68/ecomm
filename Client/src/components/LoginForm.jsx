import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { FaArrowRight } from "react-icons/fa";

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
    <div className="flex min-h-screen sm:p-6 max-w-screen-xl mx-auto">
      {/* right */}
      <img className='w-full h-screen object-cover bg-[#00538A]' src="../src/assets/login.png" alt="login img" />
      {/* left */}
      <div className="w-full flex justify-center items-center">
        <div className="md:w-1/2  p-[10px] w-[350px]">

          <h2 className='text-2xl font-semibold'>{isLogin ? 'Login' : 'Register'}</h2>
          {/* register page */}
          {!isLogin && (
            <div className="google py-[10px]">
              <p className='text-[15px] text-[#232321] pb-[10px]'>Sign up with</p>

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
          )}
          {!isLogin && (
            <h2>OR</h2>
          )}

          {isLogin && (
            <p className="text-sm text-[#70706E] cursor-pointer mb-[10px] hover:text-[#003B5A]">Forgot your password?</p>
          )}

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-3">
            {!isLogin && (
              <div className="username pt-[10px]">
                <label>Your Name</label>
                <input className="w-full px-[10px] py-[5px] border border-[#D7D7D7] rounded my-[5px]" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
              </div>
            )}
            {!isLogin && (
              <div className="username pt-[10px]">
                <label>Login Details</label>
              </div>
            )}
            <input className="w-full px-[50px] py-[5px] border border-[#D7D7D7] rounded my-[5px]" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input className="w-full px-[10px] py-[5px] border border-[#D7D7D7] rounded my-[5px]" name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} required />
            <button className="w-full bg-[#00538A] text-white p-[5px]  my-[10px] rounded hover:bg-[#003B5A] transition flex justify-between items-center" type="submit">{isLogin ? 'Email Login' : 'Register'} <FaArrowRight /></button>
          </form>

          {!isLogin && (
            <div>
              <p>Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number</p>
              <div className="">
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-[14px]">
                  By clicking 'Log In' you agree to our website<a href="#"> Terms & Conditions</a>.
                </label>
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-[14px]">
                  Keep me logged in
                </label>
              </div>
            </div>
          )}


          <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer' }} className='my-[5px] text-sm text-[#70706E] cursor-pointer hover:text-[#003B5A]'>
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </p>


          {isLogin && (
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
          )}

          {isLogin && (
            <p className='text-[13px] text-center p-[10px]'>
              By clicking 'Log In' you agree to our website
              <a className="block" href="#">Terms & Conditions.</a>
            </p>
          )}
        </div>
      </div>
    </div >

  );
};

export default Login;