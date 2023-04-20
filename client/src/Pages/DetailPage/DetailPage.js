import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'



function DetailPage() {

const {_id} = useParams()

console.log(useParams());

  const api = `http://localhost:5000/api/products/${_id}`

  
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
  
  
  const unsubscribe =   fetch(api)
      .then(res => res.json())
      .then(data => {
        setLoading(true)
        setProduct(data)
        setLoading(false)
      })


      return unsubscribe
  },[_id])

  console.log(product);
  return (
    <div>
    {loading ? 'loading' : (
      <div className='container'>
    <div className="row">
    <div className="col">
    <h4>{product.title}</h4>
    
    {
      product.sliders.map((img)=>{
        return <img width={30} src={img} alt="" />
      
      })
    }
    <p>{product.price}</p>
    <p>{product.description}</p>
    </div>
    </div>
      </div>
    )}
    </div>
  )
}

export default DetailPage
