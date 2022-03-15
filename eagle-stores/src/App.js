import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"
import { Home } from "./pages";
import Carousel from "./components/Carousel/Carousel"
import HomeCategory from "./components/HomeCategory/HomeCategory";
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
   <BrowserRouter>
    <NavBar />
    <Home />
    <Footer />
    <Routes>
      <Route path="mock-man" element={<Mockman />} />
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

