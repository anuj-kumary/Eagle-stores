import { useAuth, useData } from '../../../context';
import { useState, useEffect } from 'react';
import {
  DeleteCart,
  IncDecCart,
  PostWishItems,
} from '../../../services/Services';
import { ACTION_TYPE } from '../../../utils/actionType';
import { ToastHandler } from '../../../utils/filterFunction';
import { useNavigate } from 'react-router-dom';

export const CartCard = ({ item }) => {
  const { img, name, price, qty, originalPrice, _id } = item;
  const navigate = useNavigate();
  const [wish, setWish] = useState();
  const { token } = useAuth();
  const { state, dispatch } = useData();

  const discount = Math.floor(((originalPrice - price) / originalPrice) * 100);

  useEffect(() => {
    const wishfindItem = state.wishlist.find((ele) => ele._id === _id);
    if (wishfindItem) {
      setWish(true);
    } else {
      setWish(false);
    }
  }, [state.wishlist]);

  const wishListHandler = async (e) => {
    if (e.target.innerText === 'Go to Wishlist') {
      navigate('/wishlist');
      return;
    }
    try {
      const response = await PostWishItems({
        product: item,
        encodedToken: token,
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: ACTION_TYPE.WISHLIST,
          payload: { wishlist: response.data.wishlist },
        });
      } else ToastHandler('success', 'Successfully added to wishlist');
    } catch (err) {
      console.log(err);
    }
  };

  const DeleteCartHandler = async () => {
    try {
      const res = await DeleteCart({ productId: _id, encodedToken: token });
      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: ACTION_TYPE.SETCART_LIST,
          payload: { cartlist: res.data.cart },
        });
        ToastHandler('success', 'Cart deleted successfully');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const IncrementHandler = async () => {
    try {
      const res = await IncDecCart({
        productId: _id,
        encodedToken: token,
        type: 'increment',
      });
      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: ACTION_TYPE.SETCART_LIST,
          payload: { cartlist: res.data.cart },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const DecrementHandler = async () => {
    if (qty === 1) {
      DeleteCartHandler();
      return;
    }
    try {
      const res = await IncDecCart({
        productId: _id,
        encodedToken: token,
        type: 'decrement',
      });
      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: ACTION_TYPE.SETCART_LIST,
          payload: { cartlist: res.data.cart },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='cart'>
        <div className='cart__horizontals'>
          <div className='carts__image'>
            <img className='product__img' src={img} alt='MacBook Pro' />
          </div>
          <div className='cart__content'>
            <h3 className='cart_heading'>{name}</h3>
            <div className='carts__price'>
              &#8377; {price}
              <br />
              <span className='cart_price--notvalid'>
                <del className='actual__price'>₹ {originalPrice}</del>
              </span>
            </div>
            <div className='cart__offer'>{discount}% off</div>
            <div className='cart__quantity'>
              <p className='cart__text'>Quantity:</p>
              <p className='inc-dec__btn' onClick={DecrementHandler}>
                <i className='fas fa-minus-circle'></i>
              </p>
              <p className='cart__quantity-number'>{qty}</p>
              <p className='inc-dec__btn' onClick={IncrementHandler}>
                <i className='fas fa-plus-circle'></i>
              </p>
            </div>
            <div className='product__button'>
              <button onClick={DeleteCartHandler} className='btn btn--outlined'>
                Remove From Cart
              </button>
              <button
                onClick={(e) => wishListHandler(e)}
                className={wish ? 'btn goto__wish' : 'btn  btn__primary'}
              >
                {wish ? 'Go to Wishlist' : 'Add To Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
