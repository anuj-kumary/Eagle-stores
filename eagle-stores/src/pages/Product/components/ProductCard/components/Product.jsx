import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../../../../context';
import { PostCartItems, PostWishItems } from '../../../../../services/Services';
import { ACTION_TYPE } from '../../../../../utils/actionType';

export default function Product({ item }) {
  const [cart, setCart] = useState(false);
  const [wish, setWish] = useState(false);
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

  const { _id, img, name, price } = item;

  useEffect(
    () => {
      const cartfindItem = state.cartlist.find((ele) => ele._id === _id);

      if (cartfindItem) {
        setCart(true);
      } else {
        setCart(false);
      }
    },
    [state.cartlist],
    [state.wishlist]
  );
  useEffect(() => {
    const wishfindItem = state.wishlist.find((ele) => ele._id === _id);

    if (wishfindItem) {
      setWish(true);
    } else {
      setWish(false);
    }
  }, [state.wishlist]);

  const wishListHandler = async () => {
    try {
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await PostWishItems({
        product: item,
        encodedToken: token,
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: ACTION_TYPE.WISHLIST,
          payload: { wishlist: response.data.wishlist },
        });
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const cartHandler = async (e) => {
    try {
      if (!token) {
        navigate('/login');
        return;
      }

      if (e.target.innerText === 'Go To Cart') {
        navigate('/cart');
        return;
      }

      const response = await PostCartItems({
        product: { ...item, qty: 1 },
        encodedToken: token,
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: ACTION_TYPE.SETCART_LIST,
          payload: { cartlist: response.data.cart },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div key={_id}>
      <div className='product__card'>
        <div className='product__image'>
          <img src={img} alt={name} />
          <button onClick={wishListHandler} className='product__favourite'>
            <i
              className={`fas fa-heart ${wish ? 'add__wish' : 'remove__wish'}`}
            ></i>
          </button>
        </div>
        <h3 className='product__heading'>{name}</h3>
        <div className='product__price'>&#8377; {price}</div>
        <div className='product__button'>
          <button onClick={(e) => cartHandler(e)} className='btn btn__primary'>
            {cart ? 'Go To Cart' : 'Add To Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
