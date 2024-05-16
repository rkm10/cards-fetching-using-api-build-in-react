export default function ProductCard({ title, image, price }) {
      return (
            <>

                  <div className="card">
                        <img src={image} />
                        <p>{title}</p>
                        <p> $ {price} </p>
                  </div>
            </>
      )
}