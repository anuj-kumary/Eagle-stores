import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../context';
import { ToastHandler } from '../../utils/filterFunction';
import { ACTION_TYPE } from '../../utils/actionType';
import './Profile.css';

export const Profile = () => {
  const { user, setToken, setUser } = useAuth();
  const { dispatch } = useData();
  const navigate = useNavigate();
  const { firstName, lastName, email } = user;

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('login');
    setToken(null);
    setUser(null);
    dispatch({
      type: ACTION_TYPE.SETCART_LIST,
      payload: { cartlist: [] },
    });
    dispatch({
      type: ACTION_TYPE.WISHLIST,
      payload: { wishlist: [] },
    });
    navigate('/logout');
    ToastHandler('info', 'Successful logged Out');
  };

  return (
    <>
      <div className='container'>
        <div className='card profile'>
          <header className='card__heading profile__heading'>
            <img
              className='avatar__img md'
              src='https://rb.gy/xqmshi'
              alt='Avatar'
            />
            <span>John Doe</span>
          </header>

          <div className='card__desc profile__list'>
            <a className='list__item'>My Order</a>
            <a className='list__item'>Setting</a>
            <Link
              to='/logout'
              onClick={(e) => logoutHandler(e)}
              className='list__item'
            >
              LogOut
            </Link>
          </div>
        </div>
        <div className='card user-details'>
          <h3 className='user__heading'>Customer Profile</h3>
          <p className='user__name'>
            First Name <span className='user__detail'>{firstName}</span>
          </p>
          <p className='user__name'>
            Last Name <span className='user__detail'>{lastName}</span>
          </p>
          <p className='user__email'>
            Eamil <span className='user__detail'>{email}</span>
          </p>
          <button className='btn'>Change Password</button>
        </div>
      </div>
    </>
  );
};
