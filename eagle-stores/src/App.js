import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Login, Product, Cart, WishList } from './pages';
import { Footer, NavBar } from './components';
import { useAuth, useData } from './context';
import Loader from './components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './context';
import Signup from './pages/Authentication/Signup';
import Logout from './pages/Authentication/Logout';

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
          element={token ? <Cart /> : <Navigate to='/login' />}
        />
        <Route
          path='/wishlist'
          element={token ? <WishList /> : <Navigate to='/login' />}
        />
        <Route path='/logout' element={<Logout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
