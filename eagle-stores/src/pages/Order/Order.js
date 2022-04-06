import { useOrder } from '../../context';
import { useEffect } from 'react';
import '../Order/Order.css';

export const Order = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const { orderState } = useOrder();
  const order = orderState?.orders[0] || {};
  return (
    <>
      <h2 className='order__heading text__center'>Order Summary</h2>
      {order.length < 1 && <h3 className='text__center'>No order found !</h3>}
      <div className='order__detail'>
        <div className='card card--text'>
          <h3 className='card__heading success'>Order Confirmed</h3>

          <div key={order.paymentId}>
            <h4 className='card__price'>Payment ID: {order.paymentId}</h4>
            <h4 className='card__price'>Total Amount : ₹ {order.amount}</h4>
            {order.products?.map((prod) => (
              <div key={prod._id}>
                <div className='card card--horizontal'>
                  <div className='card--horizontal-head'>
                    <div className='card--horizontal-img'>
                      <img
                        className='product__img'
                        src={prod.img}
                        alt={prod.name}
                      />
                    </div>
                    <div className='card--horizontal-text'>
                      <header className='card__heading'>{prod.name}</header>
                      <p className='card__qty'>Total Quantity: {prod.qty}</p>
                      <p className='card__price'>Price: &#8377; {prod.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
