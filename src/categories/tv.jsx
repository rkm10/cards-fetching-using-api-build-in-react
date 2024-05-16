export default function Tv({ title, price, image }) {


      return (
            <>
                  <h1>TV</h1>
                  <div className="card">
                        <img src={image} />
                        <p>{title}</p>
                        <p> $ {price} </p>
                  </div>
            </>
      )
}

