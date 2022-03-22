import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../context';
import './Auth.css';

export const Login = () => {
  const { loginHandler, token, user } = useAuth();
  const { state, dispatch } = useData();
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    let id;
    if (token) {
      id = setTimeout(() => {
        navigate('/');
      }, 500);
    }
    return () => clearTimeout(id);
  }, [token]);

  return (
    <div className='container'>
      <div className='auth__form'>
        <div className='auth__title'>
          <h2 className='heading text__center'>Login</h2>
        </div>
        <div className='input'>
          <label>Email</label>
          <input
            className='input-txt'
            type='email'
            value={loginUser.email}
            onChange={(e) => {
              setLoginUser({
                ...loginUser,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className='input'>
          <label>Password</label>
          <input
            className='input-txt'
            type='password'
            value={loginUser.password}
            onChange={(e) => {
              setLoginUser({
                ...loginUser,
                password: e.target.value,
              });
            }}
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
            onClick={(e) => loginHandler(e, setLoginUser, loginUser)}
          >
            Login
          </button>
          <button
            className='btn'
            onClick={(e) => loginHandler(e, setLoginUser, loginUser)}
          >
            Login as Guest
          </button>
        </div>
        <div className='text__center'>
          <Link to='/signup' className='login__link fw__400'>
            Create new account
          </Link>
        </div>
      </div>
    </div>
  );
};
