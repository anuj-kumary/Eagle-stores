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
  if (rating === "") return data;
  const rate = Number(rating);
  return data.filter((item) => Number(item.rating) >= rate);
};

const sortByPrice = (data, sortBy) => {
  if (sortBy === "") return data;
  if (sortBy === "HighToLow") {
    return [...data].sort((a, b) => b.price - a.price);
  } else if (sortBy === "LowToHigh")
    return [...data].sort((a, b) => a.price - b.price);
};

const priceRangeFilter = (data, maxValue) => {
  return data.filter((el) => Number(el.price) <= maxValue);
};

export {
  categoryFilter,
  ratingFilter,
  priceRangeFilter,
  sortByPrice
};