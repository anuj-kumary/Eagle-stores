import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/auth-context';

export default function Signup() {
  const [signupForm, setSignForm] = useState({
    name: '',
    password: '',
    email: '',
  });

  const { token, signupUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let id;
    if (token) {
      id = setTimeout(() => {
        navigate('/product');
      }, 500);
    }
    return () => clearTimeout(id);
  });

  const signupHandler = (e) => {
    e.preventDefault();
    const { email, password, name } = signupForm;
    if (email && password && name !== '') {
      (async () => {
        signupUser(email, password, name);
      })();
    }
  };

  return (
    <>
      <div className='container'>
        <div className='auth__form'>
          <div className='auth__title'>
            <h2 className='heading text__center'>Signup</h2>
          </div>
          <div className='input'>
            <label>Name</label>
            <input
              className='input-txt'
              type='text'
              value={signupForm.name}
              onChange={(e) =>
                setSignForm({ ...signupForm, name: e.target.value })
              }
            />
          </div>
          <div className='input'>
            <label>Email</label>
            <input
              className='input-txt'
              type='email'
              value={signupForm.email}
              onChange={(e) =>
                setSignForm({ ...signupForm, email: e.target.value })
              }
            />
          </div>
          <div className='input'>
            <label>Password</label>
            <input
              className='input-txt'
              type='password'
              value={signupForm.password}
              onChange={(e) =>
                setSignForm({ ...signupForm, password: e.target.value })
              }
            />
          </div>
          <div className='input'>
            <label className='input__checkbox'>
              <input type='checkbox' />
              <span className='text'>I accept all Terms & Condition</span>
            </label>
          </div>

          <div className='btn__signup text__center'>
            <button
              onClick={(e) => signupHandler(e)}
              className='btn btn__primary'
            >
              Create New Account
            </button>
          </div>
          <div className='text__center'>
            <Link to='/login' className='login__link fw__400'>
              Alredy have an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
