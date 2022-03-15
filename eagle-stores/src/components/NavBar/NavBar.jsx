import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
         
          <Link to="/"> <h3 className="navigation__heading">EagleStore</h3> </Link>
         
        </div>
        <ul className="navbar__search">
          <input className="search__box" type="search" placeholder="Search" />
          <span className="search__icon">
            <i className="fas fa-search"></i>
          </span>
        </ul>

        <ul className="navbar__right">
        <div>
        <Link to="/product"
            href="./Pages/Authentication/login.html"
          >
           Explore
          </Link>
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

