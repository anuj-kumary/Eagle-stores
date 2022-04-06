import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/auth-context';
import { ToastHandler } from '../../utils/filterFunction';

export function Signup() {
  const [signupForm, setSignForm] = useState({
    firstName: '',
    lastName: '',
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
    const { firstName, lastName, password, email } = signupForm;
    if (firstName && lastName && password && email !== '') {
      (async () => {
        signupUser(firstName, lastName, password, email);
      })();
      ToastHandler('success', 'Welcome to Eagle Store');
    }
  };

  return (
    <>
      <div className='container signup__container'>
        <div className='auth__form'>
          <div className='auth__title'>
            <h2 className='heading text__center'>SignUp</h2>
          </div>
          <div className='input'>
            <label>First Name</label>
            <input
              className='input-txt'
              type='text'
              placeholder='John'
              value={signupForm.firstName}
              onChange={(e) =>
                setSignForm({ ...signupForm, firstName: e.target.value })
              }
            />
          </div>
          <div className='input'>
            <label>Last Name</label>
            <input
              className='input-txt'
              type='text'
              placeholder='Doe'
              value={signupForm.lastName}
              onChange={(e) =>
                setSignForm({ ...signupForm, lastName: e.target.value })
              }
            />
          </div>
          <div className='input'>
            <label>Email</label>
            <input
              className='input-txt'
              type='email'
              placeholder='abc@gmail.com'
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
              placeholder='*********'
              value={signupForm.password}
              onChange={(e) =>
                setSignForm({ ...signupForm, password: e.target.value })
              }
            />
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
            <p className='login__nav'>
              Alredy a Member?
              <Link to='/login' className='login___btn--now'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
