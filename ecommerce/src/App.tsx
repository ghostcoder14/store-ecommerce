import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lazy } from "react";

const Home = lazy(() => import("./Pages/home"));
const  Search = lazy(() => import("./Pages/search"));
const Cart = lazy(() => import("./Pages/cart"));

const App = () => {
  return <Router>
    {   }
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  </Router>;
};

export default App
