import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function SingleProduct() {

      let [product, setProduct] = useState({})

      const { id } = useParams();

      useEffect(() => {
            getProduct();
      }, [id]);

      function getProduct() {
            fetch(`https://fakestoreapi.in/api/products/${id}`)
                  .then((res) => {
                        if (!res.ok) {
                              alert("Failed to fetch Data");
                        }
                        return res.json();
                  })
                  .then((res) => {
                        console.log(res.product);
                        setProduct(res.product);
                  })
                  .catch((err) => {
                        alert(err);
                  })
      }

      return (
            <>
                  <div className="containers">
                        <h1> Product Details </h1>
                        <div className="card-container">
                              <img src={product.image} />
                              <p>{product.title}</p>
                              <p>Description: {product.description}</p>
                              <div className="container-card">
                                    <p>Color: {product.color}</p>
                                    <p>Brand: {product.brand}</p>
                                    <p>Model: {product.model}</p>
                                    <p>OnSale: {product.onSale}</p>
                                    <p>${product.price} </p>
                                    <p>Discount: {product.discount}</p>
                              </div>
                        </div>
                  </div>
            </>
      )

}

