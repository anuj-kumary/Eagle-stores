import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Mockman from 'mockman-js';
import { Home, Login, Product, Cart, WishList } from './pages';
import { Footer, NavBar } from './components';
import { useAuth } from './context';

function MockAPI() {
  const { token } = useAuth();

  return (
    <div className='MockAPI'>
      <Mockman />
    </div>
  );
}

function App() {
  const { token } = useAuth();
  return (
    <>
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
        <Route path='/mockman' element={<MockAPI />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
