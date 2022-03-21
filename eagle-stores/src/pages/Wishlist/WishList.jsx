import { useData } from '../../context';
import { WishListCard } from './components/WishListCard';
import './components/WishListCard.css';

export const WishList = () => {
  const { state } = useData();

  return (
    <>
      <main className='wishlist__container'>
        <h3 className='heading text__center'>My Wishlist</h3>
        {state.wishlist.length === 0 && (
          <h4>You don't have any product inside your wishlist</h4>
        )}
        <div className='wishlist'>
          {state.wishlist.length > 0 &&
            state.wishlist.map((item) => {
              return <WishListCard item={item} key={item.id} />;
            })}
        </div>
      </main>
    </>
  );
};
