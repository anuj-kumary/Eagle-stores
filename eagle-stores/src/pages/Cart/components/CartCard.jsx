import { useAuth, useData } from '../../../context';
import { DeleteCart, IncDecCart } from '../../../services/Services';
import { ACTION_TYPE } from '../../../utils/actionType';

export const CartCard = ({ item }) => {
  const { img, name, price, qty, _id, id } = item;

  const { token } = useAuth();
  const { dispatch } = useData();

  const DeleteCartHandler = async () => {
    try {
      const res = await DeleteCart({ productId: _id, encodedToken: token });
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
        console.log(cartlist);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='cart'>
        <div className='cart__horizontal'>
          <div className='cart__image'>
            <img src={img} alt='MacBook Pro' />
          </div>
          <div className='cart__content'>
            <h3 className='cart_heading'>{name}</h3>
            <div className='cart__price'>
              &#8377; {price}
              <span className='cart_price--notvalid'>
                <del>₹230,900.00</del>
              </span>
            </div>
            <div className='cart__offer'>50% off</div>
            <div className='cart__quantity'>
              <p className='cart__text'>Quantity:</p>
              <p onClick={DecrementHandler}>
                <i className='fas fa-minus-circle'></i>
              </p>
              <p className='cart__quantity-number'>{qty}</p>
              <p onClick={IncrementHandler}>
                <i className='fas fa-plus-circle'></i>
              </p>
            </div>
            <div className='product__button'>
              <button className='btn btn__primary'>Move to Wishlist</button>
              <button
                onClick={DeleteCartHandler}
                className='btn btn__secondary'
              >
                Remove From Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
