import { useAuth, useData, useOrder } from '../../context';
import '../Order/Order.css';

export const Order = () => {
  const { state } = useData();
  const { orderState } = useOrder();
  const {
    user: { firstName, lastName },
  } = useAuth();
  const cartData = [...state.cartlist];

  return (
    <>
      <h2 className='order__heading text__center'>Order Summary</h2>
      <div className='order__detail'>
        <div className='card card--text'>
          <h3 className='card__heading success'>Order Confirmed</h3>
          <h4 className='order__name'>
            {firstName} {lastName}
          </h4>
          {orderState.orders.map((item) => {
            return (
              <div key={item.paymentId}>
                <h4 className='card__price'>Payment ID: {item.paymentId}</h4>
                <h4 className='card__price'>Total Amount : ₹ {item.amount}</h4>
                {item.products.map((prod) => (
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
                          <p className='card__qty'>
                            Total Quantity: {prod.qty}
                          </p>
                          <p className='card__price'>
                            Price: &#8377; {prod.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
