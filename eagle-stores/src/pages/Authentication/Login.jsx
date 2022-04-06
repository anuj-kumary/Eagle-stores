import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../context';
import { ACTION_TYPE } from '../../utils/actionType';
import { ToastHandler } from '../../utils/filterFunction';
import {
  GetCartItems,
  GetWishItems,
  loginServices,
} from '../../services/Services';
import './Auth.css';

export const Login = () => {
  const { token, user, setUser, setToken } = useAuth();
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

  const loginHandler = async (e, setLoginUser, loginUser) => {
    e.preventDefault();
    try {
      let resp;
      if (e.target.innerText === 'Sign In as Guest') {
        setLoginUser({
          email: 'adarshbalak@gmail.com',
          password: 'adarshBalaki123',
        });
        resp = await loginServices('adarshbalak@gmail.com', 'adarshBalaki123');
      } else resp = await loginServices(loginUser.email, loginUser.password);
      if (resp.status === 200 || resp.status === 201) {
        localStorage.setItem(
          'login',
          JSON.stringify({
            token: resp.data.encodedToken,
            user: resp.data.foundUser,
          })
        );
        ToastHandler('success', 'Successfully logged in');

        const cartResp = await GetCartItems({
          encodedToken: resp.data.encodedToken,
        });
        if (cartResp.status === 200 || cartResp.status === 201) {
          dispatch({
            type: ACTION_TYPE.SETCART_LIST,
            payload: { cartlist: cartResp.data.cart },
          });
        }

        const wishResp = await GetWishItems({
          encodedToken: resp.data.encodedToken,
        });
        if (wishResp.status === 200 || wishResp.status === 201) {
          dispatch({
            type: ACTION_TYPE.WISHLIST,
            payload: { wishlist: wishResp.data.wishlist },
          });
        }

        setUser(resp.data.foundUser);
        setToken(resp.data.encodedToken);
        navigate('/product');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
      <div className='auth__form'>
        <div className='auth__title'>
          <h2 className='heading text__center'>Sign In</h2>
        </div>
        <div className='input'>
          <label>Email</label>
          <input
            className='input-txt'
            placeholder='abc@gmail.com'
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
            placeholder='********'
            value={loginUser.password}
            onChange={(e) => {
              setLoginUser({
                ...loginUser,
                password: e.target.value,
              });
            }}
          />
        </div>

        <div className='btn__signup text__center'>
          <button
            className='btn btn__primary'
            onClick={(e) => loginHandler(e, setLoginUser, loginUser)}
          >
            Sign In
          </button>
          <button
            className='btn'
            onClick={(e) => loginHandler(e, setLoginUser, loginUser)}
          >
            Sign In as Guest
          </button>
        </div>
        <div className='text__center'>
          <p className='login__nav'>
            Don't have an Account?
            <Link to='/signup' className='login___btn--now'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
