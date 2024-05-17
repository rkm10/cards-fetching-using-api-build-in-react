import { useEffect, useState } from "react"
import ProductCard from "./productcard";

const header = ["Mobile", "Audio", "Gaming", "TV"]

export default function Productlist() {
      const [products, setProducts] = useState([]);
      const [catagory, setCatagory] = useState('tv');

      useEffect(
            () => {
                  getProducts();
            }, [catagory]
      )

      console.log("Cat = ", catagory);

      async function getProducts() {
            let resource = await fetch(`https://fakestoreapi.in/api/products/category?type=${catagory}`);
            let productslist = await resource.json()
            setProducts(productslist.products)
            console.log(productslist.products)
      }

      if (products.length == 0) {
            return (<h1>Fetching data....</h1>)
      }

      return (
            <>
                  <div className="menu">
                        {header.map((element) => {
                              return (
                                    <h2 style={{ cursor: "pointer" }} onClick={() => setCatagory(element.toLocaleLowerCase())} key={element}>{element}</h2>
                              )
                        })}
                  </div>

                  <h1>Products fetching through Api Using React </h1>
                  <div className="product-list">
                        {products.map((p) => <ProductCard {...p} key={p.id}></ProductCard>)}
                  </div>
            </>
      )
}

