import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Home,
  Login,
  Signup,
  Product,
  Cart,
  WishList,
  Logout,
  Profile,
  ProductDetails,
  Checkout,
  Order,
  PageNotFound,
} from './pages';
import { Footer, Loader, NavBar, PrivateRoute } from './components';
import { useAuth, useData } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { token } = useAuth();
  const { loader } = useData();
  return (
    <>
      {loader && <Loader />}
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route
          path='/cart'
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path='/wishlist'
          element={
            <PrivateRoute>
              <WishList />
            </PrivateRoute>
          }
        />
        <Route path='/logout' element={<Logout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path='/checkout'
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path='/order'
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
