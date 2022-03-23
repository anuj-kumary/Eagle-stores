import axios from 'axios';

export const loginServices = async (email, password) =>
  await axios.post('/api/auth/login', {
    email,
    password,
  });

export const SignupServices = async ({ email, password, name }) =>
  await axios.post('/api/auth/signup', {
    email,
    password,
    name,
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

export const DeleteCart = async ({ productId, encodedToken }) => {
  return await axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
