import './App.css';
import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';
import { Home, Login, Product } from './pages';
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
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/mockman' element={<MockAPI />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
