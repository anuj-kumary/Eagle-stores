import { toast } from 'react-toastify';

const unionCategory = (...arr) => {
  const uni = arr.reduce((acc, curr) => {
    return acc.concat(
      curr.filter((el) => !acc.some((ele) => ele.id === el.id))
    );
  }, []);

  return uni;
};

const categoryFilter = (productData, category) => {
  let newData = [];
  let flag = false;
  for (const item in category) {
    if (category[item]) {
      flag = true;
      newData = unionCategory(
        newData,
        productData.filter((el) => el.category === item)
      );
    }
  }
  if (flag) return newData;
  return productData;
};

const ratingFilter = (data, rating) => {
  if (rating === '') return data;
  const rate = Number(rating);
  return data.filter((item) => Number(item.rating) >= rate);
};

const sortByPrice = (data, sortBy) => {
  if (sortBy === '') return data;
  if (sortBy === 'HighToLow') {
    return [...data].sort((a, b) => b.price - a.price);
  }
  return [...data].sort((a, b) => a.price - b.price);
};

const priceRangeFilter = (data, maxValue) => {
  return data.filter((el) => Number(el.price) <= maxValue);
};

const searchFilter = (data, searchText) => {
  if (searchText === '') return data;
  return data.filter(
    (item) =>
      item.name?.toLowerCase().startsWith(searchText?.toLowerCase()) ||
      item.category?.toLowerCase().startsWith(searchText?.toLowerCase())
  );
};

const ToastHandler = (type, message) => {
  if (type === 'error') {
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'warn') {
    toast.warn(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'success') {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'info') {
    toast.info(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export {
  categoryFilter,
  ratingFilter,
  priceRangeFilter,
  sortByPrice,
  searchFilter,
  ToastHandler,
};
