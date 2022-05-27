import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../../../../context';
import {
  PostCartItems,
  PostWishItems,
  DeleteWishItems,
} from '../../../../../services/Services';
import { ACTION_TYPE } from '../../../../../utils/actionType';
import { ToastHandler } from '../../../../../utils/filterFunction';

export default function Product({ item }) {
  const [cart, setCart] = useState(false);
  const [wish, setWish] = useState(false);
  const { state, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

  const {
    _id,
    img,
    name,
    price,
    rating,
    originalPrice,
    out_of_stock,
    trending,
  } = item;

  useEffect(() => {
    const cartfindItem = state.cartlist.find((ele) => ele._id === _id);
    if (cartfindItem) {
      setCart(true);
    } else {
      setCart(false);
    }
  }, [state.cartlist]);

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

      let response = null;
      if (wish) {
        response = await DeleteWishItems({
          productId: _id,
          encodedToken: token,
        });
      } else
        response = await PostWishItems({
          product: item,
          encodedToken: token,
        });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: ACTION_TYPE.WISHLIST,
          payload: { wishlist: response.data.wishlist },
        });
      }
      if (wish)
        ToastHandler('success', 'Successfully deleted product from wishlist');
      else ToastHandler('success', 'Successfully added to wishlist');
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
        ToastHandler('success', 'Product Added To Cart');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='cards' key={_id}>
      <div className={out_of_stock ? 'product__card overlay' : 'product__card'}>
        <div className='overlay-container'></div>
        <div className='product__image'>
          <img
            onClick={() => navigate(`/product/${_id}`)}
            src={img}
            alt={name}
          />
          {out_of_stock ? <h4 className='outofstock'>Out Of Stock</h4> : null}
          {trending && <span className='product_trend'>Trending</span>}
          <button
            onClick={() => wishListHandler()}
            className='product__favourite'
          >
            <i
              className={`fas fa-heart ${wish ? 'add__wish' : 'remove__wish'}`}
            ></i>
          </button>
        </div>
        <h3 className='text__left product__heading'>
          {name} <span className='product__rating'>{rating}★</span>
        </h3>
        <div className='product__price text__left'>
          &#8377; {price} <del className='actual__price'>{originalPrice}</del>
        </div>

        <div className='product__button'>
          <button
            onClick={(e) => cartHandler(e)}
            className={cart ? 'btn goto__cart' : 'btn btn__primary'}
            disabled={out_of_stock}
          >
            {cart ? 'Go To Cart' : 'Add To Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
