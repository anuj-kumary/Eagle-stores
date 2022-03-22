import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../context';
import { ACTION_TYPE } from '../../utils/actionType';

export const NavBar = () => {
  const { state, dispatch } = useData();
  const { token, logoutHandler } = useAuth();
  const navigate = useNavigate();
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
            value={state.filter.search}
            onChange={(e) => {
              navigate('/product');
              dispatch({
                type: ACTION_TYPE.FILTER_CHANGE,
                payload: {
                  filterType: 'search',
                  filterValue: e.target.value,
                },
              });
            }}
            className='search__box'
            type='search'
            placeholder='Search with name or categories'
          />
        </ul>

        <ul className='navbar__right'>
          <div>
            <Link to='/product'>Explore</Link>
          </div>
          <div className='badge'>
            <Link to='/cart'>
              <i className='badge__icon fas fa-cart-plus'></i>
              {state.cartlist.length > 0 && (
                <span className='badge__number'>{state.cartlist.length}</span>
              )}
            </Link>
          </div>
          <div className='badge'>
            <Link to='/wishlist'>
              <i className='badge__icon far fa-heart'></i>
              {state.wishlist.length > 0 && (
                <span className='badge__number'>{state.wishlist.length}</span>
              )}
            </Link>
          </div>
          {token ? (
            <div className='badge'>
              <Link onClick={logoutHandler} to='/logout'>
                <i
                  title='Logout'
                  className='badge__icon fas fa-sign-out-alt'
                ></i>
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
    </>
  );
};
