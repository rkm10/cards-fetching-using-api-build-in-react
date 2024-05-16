import { useEffect, useState } from "react"
import ProductCard from "./productcard";
export default function Productlist() {
      const [products, updateProducts] = useState([]);

      useEffect(
            () => {
                  getProducts();
            }, []
      )

      async function getProducts() {
            let resource = await fetch('https://fakestoreapi.in/api/products');
            let productslist = await resource.json()
            updateProducts(productslist.products)
            // console.log(productslist.products)
            // productslist.products.forEach((product) => {
            //       console.log(product.category)
            // })
      }


      if (products.length == 0) {
            return (<h1>Fetching data....</h1>)
      }
      return (
            <>
                  <h1>Products fetching through Api Using React </h1>
                  <div className="product-list">
                        {products.map((p) => <ProductCard {...p} key={p.id}></ProductCard>)}
                  </div>
            </>
      )
}

