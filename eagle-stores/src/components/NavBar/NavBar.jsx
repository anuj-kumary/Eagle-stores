import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../context';
import { ACTION_TYPE } from '../../utils/actionType';

import { useState } from 'react';

export const NavBar = () => {
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const searchHandler = () => {
    let id;
    return function () {
      clearTimeout(id);
      id = setTimeout(() => {});
    };
  };

  return (
    <>
      <nav className='navigation'>
        <div className='navigation__logo'>
          <Link to='/'>
            <h3 className='navigation__heading'>EagleStore</h3>
          </Link>
        </div>
        <ul className='navbar__search'>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.target.value === '') {
                dispatch({
                  type: ACTION_TYPE.FILTER_CHANGE,
                  payload: {
                    filterType: 'search',
                    filterValue: e.target.value,
                  },
                });
                navigate('/product');
              }
            }}
            className='search__box'
            type='text'
            placeholder='Search with name or categories'
          />
          <i
            onClick={(e) => {
              dispatch({
                type: ACTION_TYPE.FILTER_CHANGE,
                payload: {
                  filterType: 'search',
                  filterValue: input,
                },
              });
              navigate('/product');
            }}
            className='search__icon fas fa-search'
          ></i>
        </ul>

        <ul className='navbar__right'>
          <div>
            <Link to='/product'>Explore</Link>
          </div>
          <div className='badge'>
            <Link to='/cart'>
              <i className='badge__icon fas fa-cart-plus'></i>
              {state.cartlist.length > 0 && token && (
                <span className='badge__number'>{state.cartlist.length}</span>
              )}
            </Link>
          </div>
          <div className='badge'>
            <Link to='/wishlist'>
              <i className='badge__icon far fa-heart'></i>
              {state.wishlist.length > 0 && token && (
                <span className='badge__number'>{state.wishlist.length}</span>
              )}
            </Link>
          </div>
          {token ? (
            <div className='badge'>
              <Link to='/profile'>
                <i title='Profile' className='badge__icon fas fa-user'></i>
              </Link>
            </div>
          ) : (
            <div className='badge'>
              <Link to='/login'>
                <i className='badge__icon fas fa-user'></i>
              </Link>
            </div>
          )}
        </ul>
      </nav>
      <ul className='navbar__search mobile__searchbar__container'>
        <input
          className='mobile__search search__box'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.target.value === '') {
              dispatch({
                type: ACTION_TYPE.FILTER_CHANGE,
                payload: {
                  filterType: 'search',
                  filterValue: e.target.value,
                },
              });
              navigate('/product');
            }
          }}
          type='search'
          placeholder='Search with name or categories'
        />
      </ul>
    </>
  );
};
