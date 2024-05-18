import { useEffect, useMemo, useState } from "react"
import ProductCard from "./productcard";


export default function Productlist({ catagory }) {
      const [products, setProducts] = useState([]);
      const [searchText, updateSeacrchText] = useState('');

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
      }

      /*Search */
      const filteredProducts = useMemo(
            () => {

                  return products.filter(
                        (p) => {
                              return p.title.toLowerCase().includes(searchText)
                        }
                  )
            }, [products, searchText]
      )
      /*Search */

      if (products?.length == 0) {
            return (<h1>Fetching data....</h1>)
      }

      return (
            <>
                  <div className="searchbar"><input style={{ width: "250px", height: "30px", borderRadius: '15px', fontFamily: "cursive", fontSize: 16 }} type="text" value={searchText} onChange={e => updateSeacrchText(e.target.value)} /></div>
                  <h1>Products fetching through Api Using React </h1>
                  <div className="product-list">
                        {filteredProducts?.map((p) => <ProductCard {...p} key={p.id}></ProductCard>)}
                  </div>
            </>
      )
}

