import "./App.css";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"
import { Home, Product } from "./pages";
import Footer from "./components/Footer/Footer";
import Mockman from "mockman-js";

function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  return (
   <>
    <NavBar />
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
    <Footer />
   </>
  );
}

export default App;

