import React from 'react';
import { useAuth, useData, useOrder } from '../../context';
import { ToastHandler } from '../../utils/filterFunction';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../services/Services';
import { ACTION_TYPE } from '../../utils/actionType';

export const Checkoutprice = ({ checkBoxValidation }) => {
  const { state, dispatch } = useData();
  const { orderDispatch } = useOrder();
  const cartData = [...state.cartlist];
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const { firstName, lastName, email } = user || {};

  const price = cartData.reduce((acc, curr) => {
    return acc + curr.originalPrice * curr.qty;
  }, 0);

  const totalPrice = cartData.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  const discountPrice = cartData.reduce((acc, curr) => {
    return acc + (curr.originalPrice - curr.price);
  }, 0);

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const Popper = () => {
    var end = Date.now() + 3 * 1000;
    // go Buckeyes!
    var colors = ['#392f5a', '#9583cf'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 40,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 140,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const displayRazorpay = async () => {
    if (checkBoxValidation) {
      const res = await loadScript(
        'https://checkout.razorpay.com/v1/checkout.js'
      );

      if (!res) {
        Notify('Razorpay SDK failed to load, check you connection', 'error');
        return;
      }

      const options = {
        key: 'rzp_test_DXQN0ZuiAL0cO1',
        amount: totalPrice * 100,
        currency: 'INR',
        name: 'Eagle Store',
        description: 'Thank you for shopping with us',
        image:
          'https://res.cloudinary.com/anujy0510/image/upload/v1649229979/favicon_rmrwre.png',
        handler: function (response) {
          const tempObj = {
            products: [...cartData],
            amount: totalPrice,
            paymentId: response.razorpay_payment_id,
          };
          orderDispatch({ type: 'ADD_ORDERS', payload: tempObj });
          ToastHandler('success', 'Payment succesfull');
          navigate('/order');
          Popper();
          clearCart(dispatch, cartData, token);
          dispatch({
            type: ACTION_TYPE.SETCART_LIST,
            payload: { cartlist: [] },
          });
        },
        prefill: {
          name: `${firstName} ${lastName}`,
          email: email,
          contact: '9833445762',
        },
        theme: {
          color: '#392F5A',
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      ToastHandler('warn', 'Please select or add new adress');
    }
  };

  return (
    <div className='checkout'>
      <div className='card card--text'>
        <h3 className='checkout__heading text__center'>Order Details</h3>
        <div className='horizontal__line'></div>
        <p className='checkout__item'>
          Item <span className='checkout__qty'>Qty</span>
        </p>
        {cartData.map((item) => {
          const { _id, name, qty } = item;
          return (
            <div key={_id}>
              <p className='checkout__item'>
                {name} <span className='checkout__qty'>{qty}</span>
              </p>
            </div>
          );
        })}
        <div className='horizontal__line'></div>
        <h3 className='text__center checkout__heading'>Price Details</h3>
        <div className='horizontal__line'></div>
        <p className='checkout__item'>
          Price <span className='checkout__price'>₹ {price}</span>
        </p>
        <p className='checkout__item'>
          Discount
          <span className='checkout__discount'>-₹ {discountPrice}</span>
        </p>
        <p className='checkout__item'>
          Delivery Charges <span className='checkout__discount'>Free</span>
        </p>
        <p className='total__price'>
          Total Amount <span className='checkout__price'>₹ {totalPrice}</span>
        </p>
        <div className='place-order__btn'>
          <button onClick={displayRazorpay} className='btn'>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
