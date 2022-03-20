export const WishListCard = ({ item }) => {
  const { img, name, price, _id, id } = item;
  console.log(item + 'wishCard');
  return (
    <>
      <div className='wishlist'>
        <div className='product__card'>
          <div className='product__image'>
            <img src={img} alt={name} />
            <span className='product__favourite'>
              <i className='fas fa-heart'></i>
            </span>
          </div>
          <h3 className='wishlist__heading'>{name}</h3>
          <div className='product__price'>&#8377; {price}</div>
          <div className='product__button'>
            <button className='btn btn__primary'>Move to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
