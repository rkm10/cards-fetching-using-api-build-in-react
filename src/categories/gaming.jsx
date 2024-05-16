export default function Gaming({ title, price, image }) {


      return (
            <>
                  <h1>Gaming</h1>
                  <div className="card">
                        <img src={image} />
                        <p>{title}</p>
                        <p> $ {price} </p>
                  </div>
            </>
      )
}