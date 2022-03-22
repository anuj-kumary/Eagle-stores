import { useAuth, useData } from '../../../context';
import { PostCartItems } from '../../../services/Services';
import { ACTION_TYPE } from '../../../utils/actionType';
import Product from '../../Product/components/ProductCard/components/Product';

export const WishListCard = ({ item }) => {
  const { img, name, price, _id, id } = item;
  const { dispatch } = useData();
  const { token } = useAuth();

  const cartHandler = async () => {
    try {
      if (!token) {
        navigate('/login');
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
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    // <div key={_id}>
    //   <div className='product__card'>
    //     <div className='product__image'>
    //       <img src={img} alt={name} />
    //       <button className='product__favourite'>
    //         <i className='fas fa-heart'></i>
    //       </button>
    //     </div>
    //     <h3 className='wishlist__heading'>{name}</h3>
    //     <div className='product__price'>&#8377; {price}</div>
    //     <div className='product__button'>
    //       <button onClick={cartHandler} className='btn btn__primary'>
    //         Move to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <Product />
  );
};
