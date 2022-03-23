import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { ACTION_TYPE } from '../../utils/actionType';
import { GetCartItems, GetWishItems } from '../../services/Services';
import { useAuth } from '../auth/auth-context';
import { useState } from 'react';
import { DataReducer, initialistate } from '../../reducer';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { token } = useAuth();
  const [loader, setLoader] = useState(false);
  const [state, dispatch] = useReducer(DataReducer, initialistate);

  useEffect(() => {
    let id;
    setLoader(true);
    (async () => {
      const productResp = await axios.get('/api/products');
      if (productResp.status === 200 || productResp.status === 201) {
        dispatch({
          type: ACTION_TYPE.INITIALIZE_PRODUCTS,
          payload: productResp.data.products,
        });
      }

      const categoryResp = await axios.get('/api/categories');

      if (categoryResp.status === 200 || categoryResp.status === 201) {
        dispatch({
          type: ACTION_TYPE.INITIALIZE_CATEGORIES,
          payload: categoryResp.data.categories,
        });
      }

      const cartResp = GetCartItems({ encodedToken: token });
      if (cartResp.status === 200 || cartResp.status === 201) {
        dispatch({
          type: ACTION_TYPE.SETCART_LIST,
          payload: { cartlist: cartResp.data.cart },
        });
      }

      const wishResp = GetWishItems({ encodedToken: token });
      if (wishResp.status === 200 || wishResp.status === 201) {
        dispatch({
          type: ACTION_TYPE.WISHLIST,
          payload: { wishlist: wishResp.data.wishlist },
        });
      }
      setLoader(false);
    })();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch, loader, setLoader }}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);

export { useData, DataProvider };
