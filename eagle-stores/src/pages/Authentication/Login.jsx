import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../context';
import './Auth.css';

export const Login = () => {
  const { loginHandler, token, user } = useAuth();
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({
    email: 'adarshbalak@gmail.com',
    password: 'adarshBalaki123',
  });

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate('/');
      });
    }
  });

  return (
    <div className='container'>
      <div className='auth__form'>
        <div className='auth__title'>
          <h2 className='heading text__center'>Login</h2>
        </div>
        <div className='input'>
          <label>Email</label>
          <input className='input-txt' type='email' value={loginUser.email} />
        </div>
        <div className='input'>
          <label>Password</label>
          <input
            className='input-txt'
            type='password'
            value={loginUser.password}
          />
        </div>
        <div className='input'>
          <label className='input__checkbox'></label>
          <input type='checkbox' />
          <span className='text'>Remember Me</span>
          <a className='auth__forget'>Forget your Password?</a>
        </div>

        <div className='btn__signup text__center'>
          <button
            className='btn btn__primary'
            onClick={() => loginHandler(loginUser.email, loginUser.password)}
          >
            Login
          </button>
        </div>
        <div className='text__center'>
          <a className='login__link fw__400'>Create new account</a>
        </div>
      </div>
    </div>
  );
};
