import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

import './App.css'
import Productlist from './Components/productlist'
import SingleProduct from "./Components/singleProduct"


function App() {

      return (
            <>
                  <BrowserRouter>
                        <Routes>
                              <Route exact path="/" element={<Productlist />}></Route>
                              <Route path="/details/:id" element={<SingleProduct />}></Route>

                        </Routes>
                  </BrowserRouter>
            </>
      )
}

export default App