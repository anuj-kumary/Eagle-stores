import { useEffect } from 'react';
import { useData } from '../../context';
import Product from '../Product/components/ProductCard/components/Product';
import './components/WishListCard.css';

export const WishList = () => {
  const { state } = useData();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <main className='wishlist__container'>
        <h3 className='heading text__center'>My Wishlist</h3>
        {state.wishlist.length === 0 && (
          <h4 className='text__center'>
            You don't have any product inside your wishlist
          </h4>
        )}
        <div className='wishlist'>
          {state.wishlist.length > 0 &&
            state.wishlist.map((item) => {
              return <Product item={item} key={item.id} />;
            })}
        </div>
      </main>
    </>
  );
};
