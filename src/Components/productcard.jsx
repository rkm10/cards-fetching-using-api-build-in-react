import { Link } from "react-router-dom";

export default function ProductCard({ id, title, image, price }) {
      return (
            <>
                  <Link className="card" to={`/details/${id}`} >
                        <img src={image} />
                        <p>{title}</p>
                        <p> $ {price} </p>
                  </Link>
            </>
      )
}