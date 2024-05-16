export default function Mobile({ title, price, image }) {


      return (
            <>
                  <h1>Mobile</h1>
                  <div className="card">
                        <img src={image} />
                        <p>{title}</p>
                        <p> $ {price} </p>
                  </div>
            </>
      )
}