import React from 'react'
import {BrowserRouter,Routes,Route} from"react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Product from "./components/product";
import About from "./components/about";
import Context from "./components/context"



function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="About" element={<About/>} />
          <Route path="Context" element={<Context/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  
  );
  
}

export default App;
