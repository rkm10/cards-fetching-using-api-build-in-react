export default function Audio({ title, price, image }) {



      return (
            <>
                  <h1>Audio</h1>
                  <div className="card">
                        <img src={image} />
                        <p>{title}</p>
                        <p> $ {price} </p>
                  </div>
            </>
      )
}