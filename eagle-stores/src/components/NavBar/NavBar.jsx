import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          <a href="/index.html">
            <h3 className="navigation__heading">EagleStore</h3>
          </a>
        </div>
        <ul className="navbar__search">
          <input className="search__box" type="search" placeholder="Search" />
          <span className="search__icon">
            <i className="fas fa-search"></i>
          </span>
        </ul>

        <ul className="navbar__right">
        <div>
        <a
            href="./Pages/Authentication/login.html"
          >
           Explore
          </a>
        </div>
      
          <div className="badge">
            <a href="/Pages/Cart Page/cart-page.html">
              <i className="badge__icon fas fa-cart-plus"></i>
              <span className="badge__number">1</span>
            </a>
          </div>
          <div className="badge">
            <a href="./Pages/Wishlist/wishlist.html">
              <i className="badge__icon far fa-heart"></i>
              <span className="badge__number">4</span>
            </a>
          </div>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
