import './App.css';
import { Routes, Route } from 'react-router-dom';
import Mockman from 'mockman-js';
import { Home, Product } from './pages';
import { Footer, NavBar } from './components';

function MockAPI() {
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
