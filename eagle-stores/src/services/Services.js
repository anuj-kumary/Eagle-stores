import axios from 'axios';
import { ACTION_TYPE } from '../utils/actionType';

export const loginServices = async (email, password) =>
  await axios.post('/api/auth/login', {
    email,
    password,
  });

export const SignupServices = async ({
  firstName,
  lastName,
  password,
  email,
}) =>
  await axios.post('/api/auth/signup', {
    firstName,
    lastName,
    password,
    email,
  });

export const GetCartItems = async ({ encodedToken }) => {
  return await axios.get('/api/user/cart', {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const GetWishItems = async ({ encodedToken }) =>
  await axios.get('/api/user/wishlist', {
    headers: {
      authorization: encodedToken,
    },
  });

export const DeleteWishItems = async ({ productId, encodedToken }) => {
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const PostCartItems = async ({ encodedToken, product }) =>
  await axios.post(
    '/api/user/cart',
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const PostWishItems = async ({ encodedToken, product }) =>
  await axios.post(
    '/api/user/wishlist',
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const IncDecCart = async ({ encodedToken, productId, type }) => {
  return await axios.post(
    `/api/user/cart/${productId}`,
    {
      action: { type },
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};

export const postAddressServices = async ({ address, token }) => {
  return await axios.post(
    '/api/user/address',
    { address },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const editAddressServices = async ({ address, token }) => {
  return axios.post(
    `/api/user/address/edit/${address._id}`,
    { address },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deleteAddressServices = async (addresId, token) => {
  return axios.delete(`/api/user/address/${addresId}`, {
    headers: {
      authorization: token,
    },
  });
};

export const DeleteCart = async ({ productId, encodedToken }) => {
  return await axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};

export const clearCart = async (dataDispatch, cart, token) => {
  try {
    for (const item of cart) {
      await axios.delete(`api/user/cart/${item._id}`, {
        headers: {
          authorization: token,
        },
      });
    }
    dataDispatch({
      type: ACTION_TYPE.CLEAR_CART,
    });
  } catch (error) {
    console.log('Error in clear cart service', error);
  }
};
