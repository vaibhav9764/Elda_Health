import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import Product from './Components/Product';
import Batch from './Components/Batch';

function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/batch" element={<Batch />} />
      </Routes>
    </>
  );
}

export default App;
