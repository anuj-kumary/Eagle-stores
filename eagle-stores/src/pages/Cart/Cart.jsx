import { useEffect } from 'react';
import { CartCard } from './components/CartCard';
import { useData } from '../../context/data/data-context';
import '../Cart/components/CartCard.css';
import { Link } from 'react-router-dom';

export const Cart = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const { state } = useData();
  const cartData = [...state.cartlist];
  return (
    <>
      <h3 className='content__heading text__center'>
        MY Cart (
        {cartData.reduce((acc, curr) => {
          return acc + curr.qty;
        }, 0)}
        )
      </h3>
      <main className='cart__container'>
        {state.cartlist.length === 0 && (
          <h4 className='text__center'>OOPS, Cart is empty</h4>
        )}
        <div className='products__cart'>
          {cartData.map((item) => {
            return <CartCard item={item} key={item.id} />;
          })}
        </div>
        {cartData.length > 0 && (
          <div className='cart__vertical'>
            <h3 className='cart_heading'>Price details</h3>
            <hr />
            {cartData.map((item) => {
              return (
                <div key={item._id}>
                  <div className='cart__price--distribution'>
                    <p>
                      {item.name} ({item.qty} item)
                      <span className='cart__price--value'>
                        &#8377;{`${item.qty * item.price}`}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
            <h3>
              Total : <span>₹ </span>
              {cartData.reduce((acc, curr) => {
                return acc + curr.price * curr.qty;
              }, 0)}
            </h3>
            <Link to='/checkout' className='btn btn__primary'>
              Proceed To Check Out
            </Link>
          </div>
        )}
      </main>
    </>
  );
};
