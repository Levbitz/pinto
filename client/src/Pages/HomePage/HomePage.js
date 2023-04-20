import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const api = "http://localhost:5000/api/products/"


function HomePage() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
  
  
  const unsubscribe =   fetch(api)
      .then(res => res.json())
      .then(data => {
        setLoading(true)
        setProducts(data)
        setLoading(false)
      })


      return unsubscribe
  },[])

  
  return (
    <div>
  <div className="container">
  <div className="row">
  <h3 className="center">Products</h3>


  {loading ? <h4>Loading...</h4> :
products.map((product ,index)=>{
  return(
    <div key='index' className="col l3">
    <div class="row">
    <div class="col l12 s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={product.sliders[0]} />
       
        </div>
        <div class="card-content">
          <p>{product.title.slice(0 ,10)}....</p>
        </div>
        <div class="card-action">
          <Link to={`/product/${product._id}`}>Details</Link>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
})
}
  </div>
  </div>
    </div>
  )
}

export default HomePage
