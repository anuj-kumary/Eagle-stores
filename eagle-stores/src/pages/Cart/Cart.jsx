import { CartCard } from './components/CartCard';
import { useData } from '../../context/data/data-context';
import '../Cart/components/CartCard.css';

export const Cart = () => {
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
        <div className='product__cart'>
          {cartData.map((item) => {
            return <CartCard item={item} key={item.id} />;
          })}
        </div>
        <div className='cart__vertical'>
          <h3 className='cart_heading'>Price details</h3>
          <hr />
          {cartData.map((item) => {
            return (
              <div key={item._id}>
                <div className='cart__price--distribution'>
                  <p>
                    {item.name}
                    <span className='space'>Quantity: {item.qty}</span>
                    <span className='cart__price--value'>
                      &#8377; {item.price}
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
          <a className='btn btn__primary'>Proceed To Check Out</a>
        </div>
      </main>
    </>
  );
};
