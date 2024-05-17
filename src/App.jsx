import { BrowserRouter, Route, Routes } from "react-router-dom"

import './App.css'
import Productlist from './Components/productlist'
import SingleProduct from "./Components/singleProduct"
import { useState } from "react";
import NavBar from "./Components/NavBar";


function App() {

      const [catagory, setCatagory] = useState('tv');

      return (
            <>
                  <BrowserRouter>
                        <NavBar setCatagory={setCatagory} />
                        <Routes>
                              <Route exact path="/" element={<Productlist catagory={catagory} />}></Route>
                              <Route path="details/:id" element={<SingleProduct />}></Route>
                        </Routes>
                  </BrowserRouter>
            </>
      )
}

export default App